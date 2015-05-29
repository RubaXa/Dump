'use strict';


var qs = require('querystring'),
	url = require('url'),
	http = require('http'),
	request = require('request'),
	log = function () {
		//console.log.apply(console, arguments);
	};




//
// Session manager
//
var sessions = {
	_list: {},

	get: function (accessToken, callback) {
		var session = this._list[accessToken];

		if (!accessToken) {
			callback({status: 400, body: 'access-token'});
			return;
		}
		else if (!session) {
			var jar = request.jar();

			this._list[accessToken] = session = {
				token: null,

				api: function (type, url, data, callback) {
					var proxyMethod = type.toUpperCase() + ' ' + url;

					if (session[proxyMethod]) {
						return session[proxyMethod](data, callback);
					}

					if (!/^http/.test(url)) {
						url = 'https://e.mail.ru/api' + url;
					}

					log(type, url, data);
					data.token = session.token;

					return request[type]({
						url: url,
						jar: jar,
						form: data,
						headers: {
							'Referer': 'https://e.mail.ru/messages',
							'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36'
						}
					}, callback);
				},

				'POST /v1/user/login': function (data, callback) {
					var _this = this;

					jar = request.jar();

					_this.api('post', 'https://auth.mail.ru/cgi-bin/auth', {
						Login: data.email,
						Password: data.password,
						Domain: (data.email + '').split('@')[1],
						saveauth: 1,
						new_auth_form: 1
					}, function () {
						_this.api('get', 'https://e.mail.ru/cgi-bin/sdc', {email: data.email}, function () {
							_this.api('post', '/v1/tokens', {email: data.email}, function (err, httpResponse, body) {
								var token = JSON.parse(body).body.token;

								if (token) {
									_this.token = token;
								}
								else {
									body = JSON.stringify({status: 404, body: 'user'});
								}

								callback(err, httpResponse, body);
							});
						});
					});
				}
			};
		}

		callback(null, session);
	}
};



//
// API Server
//
http.createServer(function (req, res) {
	var urlData = url.parse(req.url, true),
		queryData = urlData.query,
		path = urlData.path.split('?')[0],
		httpBody = '';


	res.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': req.headers.origin,
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
		'Access-Control-Allow-Headers': 'X-Request-Id'
	});


	if (req.method == 'OPTIONS') {
		res.end();
	}
	else {
		if (req.method == 'POST') {
			req.on('data', function (data) {
				httpBody += data;
			});

			req.on('end', function () {
				queryData = qs.parse(httpBody);
				_execute();
			});
		} else {
			_execute();
		}
	}


	function _execute() {
		sessions.get(queryData.token, function (err, session) {
			if (err) {
				res.end(JSON.stringify(err));
			} else {
				session.api('post', path, queryData, function (err, httpResponse, body) {
					log(body.substr(0, 100) + '\n');
					res.end(body);
				});
			}
		});
	}
}).listen(process.env.PORT || 5000);
