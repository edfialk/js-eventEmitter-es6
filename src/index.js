'use strict';

module.exports = class {

	constructor() {
		this.events = {};
	}

	on(event, handler) {
		if (typeof this.events[event] !== 'object'){
			this.events[event] = [];
		}
		this.events[event].push(handler);
	}

	off(event, handler) {
		if (typeof this.events[event] === 'object'){
			if (typeof handler == "undefined"){
				this.events[event] = [];
			} else {
				let  i = this.events[event].indexOf(handler);
				if (i !== -1){
					this.events[event].splice(i, 1);
				}
			}
		}

		return this;
	}

	once(event, handler) {
		this.on(event, function a () {
			this.off(event, a);
			handler.apply(this, arguments);
		});
	}

	trigger(event) {
		if (typeof this.events[event] === 'object'){
			let args = [...arguments].splice(1);
			for (let f of this.events[event]){
				f.apply(this, args);
			}
		}
	}
};
