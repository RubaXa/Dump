define(function (require) {
	// Export
	return require('ui/element')('layout', {
		render: function (m) {
			var rows = [
				m('.layout__1', {key: 1}, this.props.route.regions.folders.renderComponents()),
				m('.layout__2', {key: 2}, this.props.route.router['#messages'].renderComponents())
			];

			if (this.props.rows === 3) {
				rows.push(m('.layout__3', {key: 3}));
			}

			return m('.layout' + (rows.length === 3 ? '.layout_3' : ''), {}, rows);
		}
	});
});
