define(['Emitter'], function (Emitter) {
	var _this = {
		source: null,

		setSource: function (source) {
			_this.source = source;
		},

		getModel: function (id) {
			return _this.source.props.models.get(id);
		},

		getModels: function () {
			return _this.source.props.models;
		},

		getSelected: function () {
			var props = _this.source.props;

			return props.models
				.filter(function (model) {
					return props.selected[model.id];
				})
				.map(function (item) {
					return props.models.get(item.id);
				});
		},

		clear: function () {
			_this.source.props.selected = {};
			_this.onSelect();
		},

		onSelect: function () {
			_this.emit('change', {selected: _this.getSelected().length });
		}
	};


	return Emitter.apply(_this);
});
