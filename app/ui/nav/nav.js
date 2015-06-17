define(function (require) {
	'use strict';

	require('css!./nav');


	var ICON_MAP = {
		inbox: 'inbox',
		spam: 'thumbs-o-down',
		sent: 'paper-plane-o',
		trash: 'trash-o',
		def: 'folder-o'
	};



	// Export
	return require('ui/element')('nav', {
		render: function (m) {
			var items = [];
			var props = this.props;

			props.models.forEach(function (folder) {
				if (folder.get('parent') == -1) {
					var content = [
						m('i.fa.fa-' + (ICON_MAP[folder.get('type')] || ICON_MAP.def), {key: 'icon'}),
						m('span', {key: 'name'}, folder.get('name'))
					];

					if (folder.get('unread')) {
						content.push(m('.nav__badge', {key: 'badge'}, folder.get('unread')));
					}

					items.push(m(
						'a.nav__item.' + (folder.id == props.active ? 'nav__item_active' : ''),
						{
							key: folder.id,
							href: '#!/' + folder.id + '/'
						},
						content
					));
				}
			});

			return m('.nav', {}, items);
		}
	});
});
