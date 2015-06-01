requirejs.config({
	baseUrl: './app/',

	deps: [
		'jssdk'
	],

	paths: (function (basePath) {
		return {
			//'ui/lego': 'http://local.git:8091/playground/mail/app/ui/lego'

			// Поставщики
			'jssdk': basePath + '/JSSDK/boot',
			'Ply': basePath + '/Ply/Ply',
			'fest': basePath + '/fest/examples/fest.binding',
			'pilot': basePath + '/Pilot/src/pilot',
			'Pilot/src': basePath + '/Pilot/src/',
			'pilot/mixin': basePath + '/Pilot/mixin/'
		};
	})(typeof window === 'undefined' ? '../../' : '')
});
