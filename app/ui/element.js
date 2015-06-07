define([
	'xtpl',
	'utils/util'
], function (
	/** xtpl */xtpl,
	/** util */util
) {
	'use strict';


	var listStream = function (models, spec) {
		var _this = this;
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
			_create(spec.filter, models);
		});

		models.on('change', function (evt, model) {
			spec.tick('change', _index[model.id], model);
			_this.$apply();
		});

		return _create(spec.filter, _items);
	};


	// Export
	return function (decl) {
		// «Инстанцирование»
		return function (props) {
			return util.extend({
				init: function () {}
			}, decl, {
				props: util.extend({}, decl.props, props),
				listStream: function () {
					return listStream.apply(this, arguments);
				}
			});
		};
	};
});
