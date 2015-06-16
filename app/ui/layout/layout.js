define(['ui/element'], function (element) {
	var div = element.DOM.div;

	// Export
	return element('layout', {
		events: {
			'layout:rows': function (count) {
				this.setState({rows: count});
			}
		},

		getInitialState: function () {
			return {rows: 2};
		},

		render: function () {
			var props = this.props;
			var rows = [
				div({className: 'layout__1', key: 1}, props.route.regions.folders.renderComponents()),
				div({className: 'layout__2', key: 2}, props.route.router['#messages'].renderComponents())
			];

			if (this.state.rows === 3) {
				rows.push(div({className: 'layout__3', key: 3}))
			}

			return div({className: 'layout ' + (rows.length === 3 ? 'layout_3' : '') }, rows);
		}
	});
});
