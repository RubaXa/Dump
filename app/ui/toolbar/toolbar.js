define(function (require) {
	require('css!./toolbar');

	// Export
	return require('ui/element')({
		template: require('text!./toolbar.xtpl'),

		props: {
			hidden: true,
			items: []
		}
	});
});
