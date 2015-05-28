define(['ui/block'], function (block) {
	var ICON_MAP = {
		inbox: 'inbox',
		spam: 'thumbs-o-down',
		sent: 'paper-plane-o',
		trash: 'trash-o',
		def: 'folder-o'
	};

	return block.create('nav', {
		init: function (data) {
			data.models.on('change', function (evt, folder) {
				var item = data.index[folder.id];

				item.text = folder.get('name');
				item.badge = folder.get('unread');

				data.$apply();
			});
		},

		transform: function (data) {
			data.items = [];
			data.index = {};

			(function _next(items, parentId) {
				data.models.forEach(function (folder) {
					if (folder.get('parent') == parentId) {
						var subitems = [];
						var item = {
							id: folder.id,
							url: data.route.getUrl(folder),
							icon: ICON_MAP[folder.get('type')] || ICON_MAP.def,
							text: folder.get('name'),
							badge: folder.get('unread'),
							items: subitems
						};

						items.push(item);
						data.index[folder.id] = item;

						_next(subitems, folder.id);
					}
				});
			})(data.items, -1);
		}
	});
});
