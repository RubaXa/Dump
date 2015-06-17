define([
	'uuid',
	'cito',
	'utils/util'
], function (
	/** function */uuid,
	/** cito */cito,
	/** util */util
) {
	'use strict';

	var rdot = /\./g;

	var createElement = function (selector, attrs, children) {
		var tag = 'div',
			idx = selector.indexOf('.');

		if (idx !== -1) {
			if (idx !== 0) {
				tag = selector.substr(0, idx);
			}

			attrs['class'] = selector.substr(idx + 1).replace(rdot, ' ');
		}
		else {
			tag = selector;
		}

		return {
			tag: tag,
			key: attrs.key,
			attrs: attrs,
			children: children
		};
	};


	var factory = function (name, decl) {
		var Element = function (props) {
			this.uid = uuid();
			this.props = props || {};
		};

		Element.prototype = Object.create(decl);
		Element.prototype.displayName = name;

		Element.prototype.update = function () {
			var time = performance.now();

			cito.vdom.update(this._vdom, this.render());
			console.info(name + '.update: ' + (performance.now() - time).toFixed(3) + 'ms');
		};

		Element.prototype.render = function () {
			var fragment = decl.render.call(this, createElement);

			fragment.key = this.uid;
			fragment.events = {
				$created: function (evt) {
					this._vdom = evt.virtualNode;
					this.mount && this.mount();
				}.bind(this)
			};

			return fragment;
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


	// Export
	return factory;
});
