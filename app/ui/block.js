define(['fest', 'ui/lego', 'utils/util'], function (fest, lego, util) {
	window.fest = fest;

	// Накладываем патч с поддержкой data-binding
	lego = fest.applyBindingPatch(lego);


	// Export
	return {
		render: function (name, data) {
			return lego[name](data || {});
		},

		create: function (name, spec) {
			var template = lego[name];

			spec = spec || {};

			return function (data) {
				data = data || spec.mock;

				var _el,
					html,
					model = new fest.ModelView(data),
					_render;

				spec.init && spec.init(model);

				model.bind = function (el) {
					console.time(name + '.transform');
					spec.transform && spec.transform(data);
					console.timeEnd(name + '.transform');

					_el = el || _el;

					console.time(name + '.template');
					html = template(model);
					console.timeEnd(name + '.template');

					console.time(name + '.inenrHTML');
					_el.innerHTML = html;
					console.timeEnd(name + '.inenrHTML');

					return model;
				};


				_render = util.debounce(util.bindWithoutArgs(model.bind), 0);
				model.setModels = function (models, soft) {
					model.models && models.off('add remove reset', _render);
					model.models = models;

					models.on('add remove reset', _render);
					!soft && _render();
				};

				data.models && model.setModels(data.models, true);

				return model;
			};
		}
	};
});
