define(function (require) {
	require('css!./caption');

	// Export
	return require('ui/element')({
		template: require('text!./caption.xtpl'),

		props: {
			text: ''
		}
	});
});
