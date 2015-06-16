define(function (require) {
	require('css!./datalist');

	// Export
	return require('ui/element')({
		template: require('text!./datalist.xtpl'),

		props: {
			models: null
		}
	});
});
