define([
	'RPC',
	'pilot',
	'sitemap',
	'jquery'
], function (
	/** RPC */RPC,
	/** Pilot */Pilot,
	/** Object */sitemap
	/** jQuery */
) {
	RPC.setup({
		'baseUrl': /local\.git/.test(location) ? 'http://127.0.0.1:5000/' : 'https://dump-api-proxy.herokuapp.com/'
	});

	var app = Pilot.create(sitemap);
	var navChanged = function () {
		app.nav(location.hash.split('!').pop() || '/');
	};

	window.addEventListener('hashchange', function () {
		navChanged();
	});

	// Init
	navChanged();

	return (window.app = app);
});
