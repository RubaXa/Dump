define(['uuid', 'RPC', 'Ply'], function (uuid, RPC, Ply) {
	var ACCESS_TOKEN = 'app-access-token';
	var ACCESS_EMAIL = 'app-access-email';
	var accessToken = localStorage.getItem(ACCESS_TOKEN);
	var authPromise;
	var loginPromise;


	if (!accessToken) {
		accessToken = uuid();
		localStorage.setItem(ACCESS_TOKEN, accessToken);
	}


	RPC.setup('token', accessToken);
	RPC.setup('email', localStorage.getItem(ACCESS_EMAIL));


	RPC.errorHandler.push({
		status: 'denied:user',
		process: function (xhr) {
			if (!loginPromise) {
				loginPromise = Ply.dialog('prompt', {
					onaction: function (ui) {
						var layerEl = ui.widget.layerEl;

						layerEl.classList.remove('shake');

						return RPC.call('user/login', ui.data).then(function () {
							var email = ui.data.email;

							xhr.data.email = email;
							RPC.setup('email', email);

							localStorage.setItem(ACCESS_EMAIL, email);

							loginPromise = null;
						}, function () {
							layerEl.classList.add('animated');
							layerEl.classList.add('shake');

							return Promise.reject();
						});
					}
				},{
					title: 'Log in',
					form: {
						email: 'Email',
						password: {
							hint: 'Password',
							type: 'password'
						}
					},
					ok: 'Yarrr!',
					cancel: false
				});
			}

			return loginPromise;
		}
	});

	// Export
	return function () {
		if (!authPromise) {
			authPromise = RPC.call('user');
		}

		return authPromise;
	};
});
