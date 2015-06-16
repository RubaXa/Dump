define([
	'RPC',
	'pilot',
	'react',
	'sitemap'
], function (
	/** RPC */RPC,
	/** Pilot */Pilot,
	/** React */React,
	/** Object */sitemap
) {
	RPC.setup({
		'baseUrl': /local\.git/.test(location) ? 'http://127.0.0.1:5000/' : 'https://dump-api-proxy.herokuapp.com/'
	});

	var Perf = React.addons.Perf;
	var app = Pilot.create(sitemap);
	var navChanged = function () {
		app.nav(location.hash.split('!').pop() || '/');
	};

	app.on('before-route', function () {
		Perf.start();
	});

	app.on('route-end', function () {
		Perf.stop();
		Perf.printInclusive();
	});

	window.addEventListener('hashchange', function () {
		navChanged();
	});

	// Init
	navChanged();

	return (window.app = app);
});
