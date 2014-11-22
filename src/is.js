//  isJs. JavaScript isser library
//  http://github.com/bjarneo/is
//  (c) 2014- Bjarne Øverli

(function () {
    'use strict';

    // Create our object
    var is = {};

    // Hold our obj proto toString
    var ObjToString = Object.prototype.toString;

    // Create our own each function, since Array forEach does not support > ie9
    function each(arr, fn) {
        var len = arr.length, i = 0;

        if (!arr.length && arr instanceof Array) {
            throw new TypeError('Check your array.');
        } else if (typeof fn !== 'function') {
            throw new TypeError('No callback function added.');
        }

        for (; i < len; i++) {
            /*jshint validthis:true */
            fn.call(this, arr[i], i);
        }
    }

    // Our methods to add to is object
    var methods = [
        'Object',
        'Function',
        'Undefined',
        'Null',
        'Array',
        'Date',
        'RegExp',
        'String',
        'Number',
        'Boolean'
    ];

    // Add our methods
    each(methods, function (method) {
        is[method] = function (input) {
            return ObjToString.call(input) === '[object ' + method + ']';
        };
    });

    // Object, Array, String
    is.Empty = function (input) {
        if (!input || (!input.length && !is.Undefined(input.length))) {
            return true;
        } else if (is.Object(input) && JSON.stringify(input) === '{}') {
            return true;
        }

        return false;
    };

    // Well, DOM element
    is.Element = function (elem) {
        if (elem && elem.nodeType === 1) {
            return true;
        }

        return false;
    };

    is.Integer = function (integer) {
        return parseInt(integer, 10) === integer;
    };

    is.Float = function (number) {
        return number === +number && number !== (number|0);
    };

    // like window or global in nodejs
    is.Global = function (input) {
        if (ObjToString.call(input) === '[object global]') {
            return true;
        }

        return false;
    };

    // Check if is node, amd or else we set it to window
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = is;
    } else if (typeof define === 'function' && define.amd) {
        define([], function() {
                return is;
        });
    } else {
        window.is = is;
    }
})();
