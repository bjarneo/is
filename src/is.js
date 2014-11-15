//  isJs. JavaScript isser library
//  http://github.com/bjarneo/is
//  (c) 2014- Bjarne Øverli

(function () {
    'use strict';
    
    var is = {};
    
    function each(arr, fn) {
        var len = arr.length, i = 0;
        
        if (!arr.length && arr instanceof Array) {
            throw new TypeError('Check your array.');
        } else if (typeof fn !== 'function') {
            throw new TypeError('No callback function added.');
        }
        
        for (; i < len; i++) {
            fn.call(this, arr[i], i);
        }
    }

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
    
    each(methods, function (method) {
        is[method] = function (input) {
            return Object.prototype.toString.call(input) === '[object ' + method + ']';
        };
    });
    
    is.Empty = function (input) {
        if (!input || (!input.length && !is.Undefined(input.length))) {
            return true;
        } else if (is.Object(input) && JSON.stringify(input) === '{}') {
            return true;
        }
        
        return false;
    };
    
    is.Integer = function (integer) {
        return parseInt(integer) === integer;
    };
    
    is.Float = function (number) {
        return number === +number && number !== (number|0);
    };
    
    is.Global = function (input) {
        if (Object.prototype.toString.call(input) === '[object global]') {
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