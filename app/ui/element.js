define([
	'mithril',
	'sandbox',
	'utils/util'
], function (
	/** Mithril */m,
	/** sandbox */sandbox,
	/** util */util
) {
	'use strict';

	var factory = function (name, decl) {
		var Element = function (props) {
			this.props = props || {};
		};

		Element.prototype = Object.create(decl);
		Element.prototype.displayName = name;

		Element.prototype.set = function (props) {
			util.extend(this.props, props);
			sandbox.emit('__changes__');
		};

		Element.prototype.render = function () {
			return decl.render.call(this, m);
		};


		// «Инстанцирование»
		return function (props) {
			return function (route, key) {
				props.key = key;
				props.route = route;

				return new Element(props);
			};
		};
	};


	factory.sandbox = sandbox;


	// Export
	return factory;
});
