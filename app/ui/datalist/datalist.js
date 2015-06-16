define(function (require) {
	require('css!./datalist');

	var element = require('ui/element'),
		DOM = element.DOM;


	// Export
	return element('datalist', {
		events: {
			'letters': function (letters) {
				this.setState({models: letters});
			}
		},

		getInitialState: function () {
			return {
				active: -1,
				models: [],
				selected: {}
			};
		},

		render: function () {
			console.time('render');

			var state = this.state;
			var items = state.models.map(function (model) {
				var content = [];

				content.push(
					// Unread
					DOM.div({
						key: 'unread',
						className: 'datalist__unread' + (model.is('flags.unread') ? ' datalist__unread_yes' : '')
					}),

					// Рожа
					DOM.div({
						key: 'ava',
						className: 'datalist__ava',
						style: {
							backgroundImage: 'url("' + model.get('correspondents.from.0.avatars.default') + '")'
						}
					},
						// Чекед
						DOM.i({key: 'check', className: 'fa fa-check-circle'})
					),

					// От кого
					DOM.a({
						key: 'user',
						href: '#!',
						className: 'datalist__user'
					}, model.get('correspondents.from.0.name') || model.get('correspondents.from.0.email')),

					// Тема
					DOM.a({key: 'subj', className: 'datalist__subj'}, model.get('subject')),

					// Удалить
					DOM.i({key: 'trash', className: 'datalist__ctrl fa fa-trash-o'})
				);

				return DOM.div({
					key: model.id,
					className: 'datalist__item' +
						(state.active === model.id ? ' datalist__item_active' : '') +
						(state.selected[model.id] ? ' datalist__item_selected' : '')
				}, content);
			});

			var datalist = DOM.div({className: 'datalist'}, items);

			console.timeEnd('render');

			return datalist;
		}
	});
});
