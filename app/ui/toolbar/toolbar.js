define(function (require) {
	require('css!./toolbar');

	// Export
	return require('ui/element')('toolbar', {
		props: {
			hidden: true,
			items: []
		},

		render: function () {
		}
	});
});
