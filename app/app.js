define([
	'RPC',
	'pilot',
	'sitemap'
], function (
	/** RPC */RPC,
	/** Pilot */Pilot,
	/** Object */sitemap
) {
	RPC.setup({
		'baseUrl': /local\.git/.test(location) ? 'http://127.0.0.1:5000/' : 'https://dump-api-proxy.herokuapp.com/'
	});

	var app = Pilot.create(sitemap);
	var navChanged = function () {
		app.nav(location.hash.split('!').pop() || '/');
	};

	app.on('before-route', function () {
	});

	app.on('route-end', function () {
	});

	window.addEventListener('hashchange', function () {
		navChanged();
	});

	// Init
	navChanged();

	return (window.app = app);
});
