define(function (require) {
	'use strict';

	require('css!./nav');


	var element = require('ui/element'),
		DOM = element.DOM;


	var ICON_MAP = {
		inbox: 'inbox',
		spam: 'thumbs-o-down',
		sent: 'paper-plane-o',
		trash: 'trash-o',
		def: 'folder-o'
	};



	// Export
	return element('nav', {
		events: {
			'folders:active': function (folder) {
				this.setState({active: folder.id});
			}
		},

		getInitialState: function () {
			return {
				active: -1
			};
		},

		render: function () {
			var items = [];
			var state = this.state;
			var props = this.props;

			props.models.forEach(function (folder) {
				if (folder.get('parent') == -1) {
					var content = [
						DOM.i({key: 'icon', className: 'fa fa-' + (ICON_MAP[folder.get('type')] || ICON_MAP.def)}),
						DOM.span({key: 'name'}, folder.get('name'))
					];

					if (folder.get('unread')) {
						content.push(DOM.span({key: 'badge', className: 'nav__badge'}, folder.get('unread')))
					}

					items.push(DOM.a({
						key: folder.id,
						href: '#!/' + folder.id + '/',
						className: 'nav__item ' + (folder.id == state.active ? 'nav__item_active' : '')
					}, content));
				}
			});

			return DOM.div({className: 'nav'}, items);
		}
	});
});
