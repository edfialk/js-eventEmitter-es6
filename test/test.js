'use strict';

import { expect, assert } from 'chai';
import Events from '../src';

describe('Event Emitter', () => {

	it('should accept a value', () => {
		const e = new Events();
		e.on('event', val => {
			assert.equal(val, 'test');
		});
		e.trigger('event', 'test');
	});

	it('should accept multiple values', () => {
		const e = new Events();
		e.on('event', (a, b, c, d) => {
			expect(a).to.equal(1);
			expect(b).to.equal(2);
			expect(c).to.equal(3);
			expect(d).to.equal(4);
		});
		e.trigger('event', 1, 2, 3, 4);
	});

	it('should use multiple handlers', () => {
		const e = new Events();
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
		const e = new Events();
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
		const e = new Events();
		let count = 0;
		e.once('event', () => {
			count++;
		});
		e.trigger('event');
		e.trigger('event');
		e.trigger('event');
		e.trigger('event');
		e.trigger('event');
		assert.equal(count, 1);
	});

	it('should not share events', () => {
		const e = new Events();
		const f = new Events();
		let count = 0;
		e.on('event', () => {
			count++;
		});
		f.trigger('event');
		assert.equal(count, 0);
	});
});