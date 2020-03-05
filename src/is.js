const is = {
    Empty(input) {
        if (!input || (!input.length && !is.Undefined(input.length))) {
            return true;
        } else if (is.Object(input) && JSON.stringify(input) === '{}') {
            return true;
        }

        return false;
    },

    Element(elem) {
        if (elem && elem.nodeType === 1) {
            return true;
        }

        return false;
    },

    Integer(integer) {
        return parseInt(integer, 10) === integer;
    },

    Float(number) {
        return number === +number && number !== (number|0);
    },

    Global(input) {
        if (ObjToString.call(input) === '[object global]') {
            return true;
        }

        return false;
    }
};

const ObjToString = Object.prototype.toString;

methods = [
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
].forEach(method => {
    is[method] = input => ObjToString.call(input) === '[object ' + method + ']';
});

module.exports = is;