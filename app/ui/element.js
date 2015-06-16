define([
	'react',
	'sandbox',
	'utils/util'
], function (
	/** React */React,
	/** sandbox */sandbox,
	/** util */util
) {
	'use strict';

	var factory = function (name, decl) {
		var componentDidMount = decl.componentDidMount;


		decl.displayName = name;

		decl.componentDidMount = function () {
			var _this = this,
				props = _this.props,
				events = _this.events;

			Object.keys(events).forEach(function (name) {
				var fn = events[name];

				fn.handle = fn.handle || function () {
					return fn.apply(_this, arguments);
				};

				sandbox.on(name, fn.handle);
			});

			if (props.models) {
				props.models.on('update', util.bindWithoutArgs(this.forceUpdate, [], this));
			}

			if (componentDidMount) {
				componentDidMount.call(_this);
			}
		};

		decl.componentDidUnmount = function () {
			var _this = this,
				events = _this.events;

			Object.keys(events).forEach(function (name) {
				sandbox.off(name, events[name].handle);
			});
		};

		var Element = React.createClass(decl);

		// «Инстанцирование»
		return function (props) {
			return function (route, key) {
				props.key = key;
				props.route = route;

				return React.createElement(Element, props);
			};
		};
	};


	factory.DOM = React.DOM;
	factory.sandbox = sandbox;


	// Export
	return factory;
});
