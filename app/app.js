define([
	'pilot',
	'sitemap',
	'setup'
], function (
	/** Pilot */Pilot,
	/** Object */sitemap
) {
	'use strict';

	var app = Pilot.create(sitemap);
	var navChanged = function () {
		app.nav(location.hash.split('!').pop() || '/');
	};

	window.addEventListener('hashchange', function () {
		navChanged();
	});

	// Init
	navChanged();

	// Export
	return (window.app = app);
});
