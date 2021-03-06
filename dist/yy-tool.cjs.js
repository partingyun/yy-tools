'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// sum.ts
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, total) { return total + prev; }, 0);
}

exports.sum = sum;
