define(['Emitter'], function (Emitter) {
	var _this = {
		source: null,

		setSource: function (source) {
			_this.source = source;
		},

		getModel: function (id) {
			return _this.source.models.get(id);
		},

		getModels: function () {
			return _this.source.models;
		},

		getSelected: function () {
			return _this.source.items
				.filter(function (item) {
					return item.selected;
				})
				.map(function (item) {
					return _this.source.models.get(item.id);
				});
		},

		clear: function () {
			_this._selectAll('none');
		},

		_selectAll: function (mode) {
			_this.source.items.forEach(function (item) {
				item.selected = mode != 'none';
			});
			_this.emit('change', {selected: mode == 'none' ? 0 : _this.source.items.length });
		},

		selectAllOnPerPage: function () {
			_this._selectAll('per-page');
		},

		deselectAllOnPerPage: function () {
			_this._selectAll('none');
		},

		onSelect: function (item) {
			item.selected = !item.selected;
			_this.emit('change', {selected: _this.getSelected().length });
		}
	};


	Object.keys(_this).forEach(function (name) {
		var fn = _this[name];

		if (typeof fn === 'function' && name != 'setSource' && !/^(_|get|set)/.test(name)) {
			_this[name] = function () {
				fn.apply(_this, arguments);
				_this.source.$apply();
			};
		}
	});

	return Emitter.apply(_this);
});
