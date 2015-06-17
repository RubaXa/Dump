define(function (require) {
	require('css!./datalist');

	// Export
	return require('ui/element')('datalist', {
		mount: function () {
			require('mail/Message').all.on('update', this.update.bind(this));
		},

		render: function (m) {
			var props = this.props;
			var items = props.models.map(function (model) {
				var content = [];

				content.push(
					// Unread
					m('.datalist__unread' + (model.is('flags.unread') ? '.datalist__unread_yes' : ''), {key: 'unread'}),

					// Рожа
					m('.datalist__ava', {
						key: 'ava',
						style: {
							'background-image': 'url("' + model.get('correspondents.from.0.avatars.default') + '")'
						}
					},
						// Чекед
						m('i.fa.fa-check-circle', {key: 'check'})
					),

					// От кого
					m('a.datalist__user', {
						key: 'user',
						href: '#!'
					}, model.get('correspondents.from.0.name') || model.get('correspondents.from.0.email')),

					// Тема
					m('.datalist__subj', {key: 'subj'}, model.get('subject')),

					// Удалить
					m('i.datalist__ctrl.fa.fa-trash-o', {key: 'trash'})
				);

				return m('.datalist__item' +
						(props.active === model.id ? '.datalist__item_active' : '') +
						(props.selected[model.id] ? '.datalist__item_selected' : ''), {key: model.id}, content);
			});

			return m('.datalist', {}, items);
		}
	});
});
