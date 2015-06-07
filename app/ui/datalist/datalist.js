define(function (require) {
	require('css!./datalist');

	// Export
	return require('ui/element')({
		template: require('text!./datalist.xtpl'),

		props: {
			models: null
		}
	});
});
//
//
//define(['ui/block', 'mail/Message'], function (block, Message) {
//	return block.create('datalist', {
//		init: function (data) {
//			Message.all.on('change', function (evt, message) {
//				var item = data.index[message.id];
//
//				if (item) {
//					item.unread = message.get('flags.unread');
//					item.flagged = message.get('flags.flagged');
//				}
//			});
//		},
//
//		transform: function (data) {
//			var items = data.items = [],
//				isMessages = data.route.router.request.is('#message');
//
//			data.index = {};
//
//			data.models && data.models.forEach(function (message) {
//				var item = {
//					id: message.id,
//					active: isMessages && data.route.router['#message'].params.message == message.id,
//					url: data.route.router.getUrl('#message', message),
//					email: message.get('correspondents.from.0.name') || message.get('correspondents.from.0.email'),
//					avatar: message.get('correspondents.from.0.avatars.default'),
//					unread: message.is('flags.unread'),
//					flagged: message.is('flags.flagged'),
//					subject: message.get('subject'),
//					snippet: message.get('snippet')
//				};
//
//				items.push(item);
//				data.index[message.id] = item;
//			});
//		}
//	});
//});
