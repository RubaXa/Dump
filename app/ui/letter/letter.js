define(function (require) {
	require('css!./letter');

	// Export
	return require('ui/element')({
		template: require('text!./letter.xtpl'),

		props: {
			model: null
		}
	});
});
