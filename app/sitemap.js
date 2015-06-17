define(function (require) {
	'use strict';


	// Всякие ui-блоки (хелпер)
	var ui = {
		layout: require('ui/layout/layout'),
		nav: require('ui/nav/nav'),
		caption: require('ui/caption/caption'),
		datalist: require('ui/datalist/datalist'),
		//toolbar: require('ui/toolbar/toolbar'),
		//letter: require('ui/letter/letter')
	};


	{
		// Песочница
		var sandbox = require('sandbox');

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

		if (folder && folder.is('system')) {
			params = Object.create(params);
			params.folder = folder.get('type');
		}

		 return builder(params);
	};



	// Структура приложеньки
	return {
		access: require('service/auth'),
		mixins: [require('pilot/mixin/mithril')],

		el: '#app',
		components: {
			layout: ui.layout({})
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
				mixins: [require('pilot/mixin/mithril')],
				components: {
					nav: ui.nav({models: Folder.all})
				},
				'on:route': function () {
					this.nav.props.active = this.model.folder.id;
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

			mixins: [require('pilot/mixin/mithril')],

			components: {
				caption: ui.caption({}),
				datalist: ui.datalist({
					selected: {},
					onselect: selection.onSelect,
					onunread: action.toggleUnread,
					ondelete: action.delete
				}),
				//toolbar: ui.toolbar({
				//	hidden: true,
				//	items: [{
				//		icon: 'check',
				//		text: 'Прочитать',
				//		onclick: action.markAsReadedSelected
				//	}, {
				//		icon: 'trash-o',
				//		text: 'Удалить',
				//		onclick: action.deleteSelected
				//	}]
				//})
			},

			_init: function () {
				//action.setSource(selection);
				//selection.setSource(this.datalist);
				//
				//selection.on('change', function (evt) {
				//	this.toolbar.props.hidden = !evt.selected;
				//}.bind(this));
				//
				//action.on('execution', function () {
				//	selection.clear();
				//});
			},

			'on:route': function () {
				this.caption.props.text = this.model.folder.get('name');
				this.datalist.props.models = this.model.messages;
				//this.datalist.props.active = this.router.request.params.message;
			},


			'#inbox': {
				// да ничего не нужно
			},


			'#message': {
				url: '/:folder/:message',
				model: {
					message: function (req) {
						return Message.findOne(req.params.message);
					}
				},
				mixins: [require('pilot/mixin/xtpl')],
				components: {
					//letter: ui.letter({})
				},
				'on:route': function () {
					this.letter.model = this.model.message;
					Action.execute('mail.MarkAs', {models: [this.model.message], flag: 'unread', state: false});
				}
			}
		}
	};
});
