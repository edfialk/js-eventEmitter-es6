*A simple Javascript Event Emitter written in EcmaScript 2015*


This is a test library not added to npm.

### Install

    git clone https://github.com/edfialk/js-eventEmitter-es6
    npm install

### Test

    npm run test
    
### Build

    npm run build
    npm run watch

### Usage

    import EventEmitter from 'src';
    const e = new EventEmitter();

*Multiple emitters can work independently.*

##### add event listener

    e.on('event', (a, b, c) => {
        //handle
    });
    e.on('event', (...args) => {
        //handle
    });

##### trigger event

    e.trigger('event', val);
    e.trigger('event', val1, val2, val3);

##### remove event listener

    const handler = function(){};
    e.on('event', handler);
    e.off('event', handler);

##### fire handle only once

    e.once('event', () => {
        //only run once
    });

