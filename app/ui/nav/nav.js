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
	return require('ui/element')({
		template: require('text!./nav.xtpl'),

		props: {
			items: [],
			active: -1,
			expanded: {}
		},

		init: function () {
			this.props.items = this.listStream(this.props.models, {
				filter: function (folder) {
					return folder.get('parent') == -1;
				},

				tick: function (type, item, folder, toStream) {
					if (type === 'add') {
						item.id = folder.id;
						item.folder = folder.id;
						item.items = toStream(function (folder) {
							return folder.get('parent') == item.id;
						});
					}

					item.icon = ICON_MAP[folder.get('type')] || ICON_MAP.def;
					item.text = folder.get('name');
					item.badge = folder.get('unread');
				}
			});
		}
	});
});
