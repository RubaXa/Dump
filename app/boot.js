requirejs.config({
	baseUrl: './app/',

	deps: [
		'jssdk'
	],

	shim: {
		'app': {
			deps: [
				'mail/actions/MarkAs',
				'mail/actions/MoveTo',
				'mail/actions/Delete'
			]
		}
	},

	map: {
		'*': {
			css: 'node_modules/require-css/css.js',
			text: 'node_modules/requirejs-text/text.js'
		}
	},

	paths: (function (basePath) {
		return {
			//'ui/lego': 'http://local.git:8091/playground/mail/app/ui/lego'

			// Поставщики
			'jssdk': basePath + '/JSSDK/boot',
			'Ply': basePath + '/Ply/Ply',
			'xtpl': basePath + '/xtpl/dist/xtpl',
			'fest': basePath + '/fest/examples/fest.binding',
			'pilot': basePath + '/Pilot/src/pilot',
			'Pilot/src': basePath + '/Pilot/src/',
			'pilot/mixin': basePath + '/Pilot/mixin/'
		};
	})(typeof window === 'undefined' ? '../../' : '')
});
