define(['text!./nav', 'css!./nav'], function (template) {
	'use strict';


	var ICON_MAP = {
		inbox: 'inbox',
		spam: 'thumbs-o-down',
		sent: 'paper-plane-o',
		trash: 'trash-o',
		def: 'folder-o'
	};


	function listStream(models, spec) {
		var _items = [];
		var _index = {};
		var _create = function (filter, items) {
			var length = models.length;
			var _stream = function (filter) {
				return _create(filter, []);
			};

			for (var i = 0; i < length; i++) {
				var item = {};
				var model = models[i];

				if (filter(model)) {
					spec.tick('add', item, model, _stream);

					_index[model.id] = item;
					items.push(item);
				}
			}

			return items;
		};

		models.on('reset add remove', function () {
			_index = {};
			_items.splice(0, _items.length);
		});

		models.on('change', function (evt, model) {
			spec.tick('change', _index[model.id], model);
		});

		return _create(spec.filter, _items);
	}


	// Export
	return xtpl.element({
		tpl: template,

		props: {
			active: -1,
			expanded: {}
		},

		init: function () {
			this.props.items = listStream(this.props.models, {
				filter: function (folder) {
					return folder.get('parent') == this.parent;
				},

				tick: function (type, data, folder, toStream) {
					if (type === 'add') {
						data.id = folder.id;
						data.items = toStream(function (folder) {
							return folder.get('parent') == data.id;
						});
					}

					data.icon = ICON_MAP[folder.get('type')] || ICON_MAP.def;
					data.text = folder.get('name');
					data.badge = folder.get('unread');
				}
			});
		},

		onclick: function (item) {
			this.active = item.id;
		}
	});
});
