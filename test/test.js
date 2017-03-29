'use strict';

import { expect, assert } from 'chai';
import Events from '../src';

describe('Event Emitter', () => {
	it('should accept a value', () => {
		let e = new Events();
		e.on('event', val => {
			assert.equal(val, 'test');
		});
		e.trigger('event', 'test');
	});
	it('should accept multiple values', () => {
		let e = new Events();
		e.on('event', (...args) => {
			expect(args[0]).to.equal(1);
			expect(args[1]).to.equal(2);
		});
		e.trigger('event', 1, 2);
	});
	it('should use multiple handlers', () => {
		let e = new Events();
		let count = 0;
		e.on('event', () => {
			count += 1;
		});
		e.on('event', () => {
			count += 10;
		});
		e.trigger('event');
		assert.equal(count, 11);
	})
	it('should remove a handler', () => {
		let e = new Events();
		let count = 0;
		const handler = function(){
			count++;
		};
		e.on('event', handler);
		e.off('event', handler);
		e.trigger('event');
		assert.equal(count, 0);
	});
	it('should only use handler once', () => {
		let e = new Events();
		let count = 0;
		e.once('event', () => {
			count++;
		});
		//addTen
		//addHundred
		e.trigger('event');
		e.trigger('event');
		e.trigger('event');
		e.trigger('event');
		e.trigger('event');
		assert.equal(count, 1);
	});
});