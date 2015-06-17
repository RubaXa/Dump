define(function (require) {
	require('css!./caption');


	// Export
	return require('ui/element')('caption', {
		render: function (m) {
			return m('.caption', {}, this.props.text);
		}
	});
});
