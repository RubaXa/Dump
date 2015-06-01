define([
	'RPC',
	'mail/actions/MarkAs',
	'mail/actions/MoveTo',
	'mail/actions/Delete'
], function (
	/** RPC */RPC
) {
	RPC.setup({
		'baseUrl': /local\.git/.test(location) ? 'http://127.0.0.1:5000/' : 'https://dump-api-proxy.herokuapp.com/'
	});
});
