define(['Emitter', 'Action', 'mail/Folder'], function (Emitter, Action, Folder) {
	var _this = {
		setSource: function (source) {
			_this.source = source;
		},

		/** @return {mail.Message} */
		getModel: function (id) {
			return _this.source.getModel(id);
		},

		getModels: function () {
			return _this.source.getModels();
		},

		getSelected: function () {
			return _this.source.getSelected();
		},

		_execute: function (name, params) {
			_this.emit('execution');
			return Action.execute(name, params);
		},

		_markAs: function (models, flag, state) {
			return _this._execute('mail.MarkAs', {models: models, flag: flag, state: state});
		},

		toggleUnread: function (item) {
			var model = _this.getModel(item.id);
			return _this._markAs([model], 'unread', !model.is('flags.unread'));
		},

		markAsReadedSelected: function () {
			return _this._markAs(_this.getSelected(), 'unread', false);
		},

		_delete: function (models) {
			var _list = _this.getModels();

			return _this._execute('mail.MoveTo', {models: models, folderTo: Folder.TRASH}).then(function () {
				models.forEach(function (model) {
					_list.remove(model);
				});
			});
		},

		'delete': function (item) {
			return _this._delete([_this.getModel(item.id)]);
		},

		deleteSelected: function () {
			return _this._delete(_this.getSelected());
		}
	};


	// Export
	return Emitter.apply(_this);
});
