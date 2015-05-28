define(function (require) {
	'use strict';


	// Всякие ui-блоки (хелпер)
	var ui = {
		nav: require('ui/nav/nav'),
		caption: require('ui/caption/caption'),
		toolbar: require('ui/toolbar/toolbar'),
		datalist: require('ui/datalist/datalist'),
		letter: require('ui/letter/letter')
	};


	{
		// Модельки
		var Action = require('Action');
		var Folder = require('mail/Folder');
		var Message = require('mail/Message');

		// Медиаторы
		var action = require('mediator/action');
		var selection = require('mediator/selection');
	}


	var _toUrl = function (params, builder) {
		if (params instanceof Folder) {
			params = {folder: params.id};
		}
		else if (params instanceof Message) {
			params = {folder: params.get('folder'), message: params.id};
		}

		var folder = Folder.get(params.folder);

		if (folder.is('system')) {
			params.folder = folder.get('type');
		}

		 return builder(params);
	};



	// Структура приложеньки
	return {
		dom: require('ui/block').render('layout'),
		mixins: [require('pilot/mixin/view')],
		access: require('service/auth'),

		'on:route': function () {
			this.el.classList.toggle('layout_3', this.request.is('#message'));
		},

		// Глобальные модели
		model: {
			// Список папок
			folders: function () {
				return Folder.all.length ? Folder.all : Folder.find();
			},

			// Папка
			folder: function (req, waitFor) {
				return waitFor('folders').then(function (folders) {
					return folders.get(req.params.folder);
				});
			}
		},

		// Регионы
		'*': {
			'folders': {
				mixins: [require('pilot/mixin/fest')],
				components: {
					nav: ui.nav({models: Folder.all})
				},
				'on:route': function () {
					this.nav.active = this.model.folder.id;
				}
			}
		},


		// Список писем
		'#messages': {
			url: {
				pattern: '/:folder?',
				params: {
					folder: {
						default: 0,
						decode: function (value) {
							var id = Folder[value.toUpperCase()];
							return id === void 0 ? parseInt(value, 10) : id;
						}
					}
				},
				toUrl: _toUrl
			},

			model: {
				messages: function (req) {
					var folderId = req.params.folder;

					return this[folderId] || Message.find({folder: folderId, last_modified: 1}).then(function (folders) {
						this[folderId] = folders;
						return folders;
					}.bind(this));
				}
			},
			mixins: [require('pilot/mixin/fest')],
			components: {
				caption: ui.caption({}),
				datalist: ui.datalist({
					onselect: selection.onSelect,
					onunread: action.toggleUnread,
					ondelete: action.delete
				}),
				toolbar: ui.toolbar({
					hidden: true,
					items: [{
						icon: 'check',
						text: 'Прочитать',
						onclick: action.markAsReadedSelected
					}, {
						icon: 'trash-o',
						text: 'Удалить',
						onclick: action.deleteSelected
					}]
				})
			},
			init: function () {
				action.setSource(selection);
				selection.setSource(this.datalist);

				selection.on('change', function (evt) {
					this.toolbar.$set('hidden', !evt.selected);
				}.bind(this));

				action.on('execution', function () {
					selection.clear();
				});
			},
			'on:route': function () {
				this.caption.$set('text', this.model.folder.get('name'));
				this.datalist.setModels(this.model.messages);
			},


			'#inbox': {
				// да ничего не нужно
			},

			'#message': {
				url: '/:folder/:message',
				model: {
					message: function (req, waitFor) {
						return Message.findOne(req.params.message);
					}
				},
				mixins: [require('pilot/mixin/fest')],
				components: {
					letter: ui.letter({
						model: new Message,
						html: function () {
							return (this.model.get('body.html') || '').replace(/<base.*?>/g, '');
						}
					})
				},
				'on:route': function () {
					this.letter.model = this.model.message;
					Action.execute('mail.MarkAs', {models: [this.model.message], flag: 'unread', state: false});
				}
			}
		}
	};
});
