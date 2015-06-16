define(function (require) {
	require('css!./caption');


	var element = require('ui/element'),
		div = element.DOM.div;


	// Export
	return element('caption', {
		events: {
			'folders:active': function (folder) {
				this.setState({text: folder.get('name')});
			}
		},

		getInitialState: function () {
			return {
				text: ''
			};
		},

		render: function () {
			return div({className: 'caption'}, this.state.text);
		}
	});
});
