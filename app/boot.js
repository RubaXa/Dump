requirejs.config({
	baseUrl: './',

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
		},

		'react': {
		}
	},

	map: {
		'*': (function (basePath) {
			return {
				css: basePath + 'node_modules/require-css/css.js',
				text: basePath + 'node_modules/requirejs-text/text.js'
			}
		})(typeof window === 'undefined' ? '' : '')
	},

	paths: (function (basePath) {
		return {
			//'ui/lego': 'http://local.git:8091/playground/mail/app/ui/lego'
			'app': './app/app',
			'sitemap': './app/sitemap',
			'sandbox': './app/sandbox',
			'ui': './app/ui/',
			'mediator': './app/mediator/',
			'service': './app/service/',

			// Поставщики
			'react': 'https://fb.me/react-with-addons-0.13.3',
			'mithril': 'http://mithril.js.org/mithril.min',
			'jssdk': basePath + '/JSSDK/boot',
			'Ply': basePath + '/Ply/Ply',
			'xtpl': basePath + '/xtpl/dist/xtpl',
			'fest': basePath + '/fest/examples/fest.binding',
			'pilot': basePath + '/Pilot/src/pilot',
			'Pilot/src': basePath + '/Pilot/src/',
			'pilot/mixin': basePath + '/Pilot/mixin/'
		};
	})(typeof window === 'undefined' ? '../' : '')
});
