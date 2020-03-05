var is = require('./../src/is.js');

exports['test isser framework'] = function (assert) {
    var test;

    assert.equal(is.Object({}), true, 'Assert is.Object({}) should return true');

    assert.equal(is.Function(function() {}), true, 'Assert is.Function(function() {}) should return true');
    assert.equal(is.Function(new Function), true, 'Assert is.Function(new Function) should return true');

    assert.equal(is.Undefined(test), true, 'Assert is.Undefined(test) should return true');

    assert.equal(is.Array(['a', 'b', 'c', 'd']), true, 'Assert is.Array(["a", "b", "c", "d"]) should return true');
    assert.equal(is.Array(new Array), true, 'Assert is.Array(new Array) should return true');

    assert.equal(is.Date(new Date), true, 'Assert is.Date(new Date) should return true');

    assert.equal(is.RegExp(/a-z/), true, 'Assert is.RegExp(/a-z/) should return true');
    assert.equal(is.RegExp(new RegExp(/a-z/)), true, 'Assert is.RegExp(new RegExp(/a-z/)) should return true');

    assert.equal(is.String('its a string! 1+1'), true, 'Assert is.String("its a string! 1+1") should return true');
    assert.equal(is.String(new String), true, 'Assert is.String(new String) should return true');

    assert.equal(is.Boolean(true), true, 'Assert is.Boolean(true) should return true');
    assert.equal(is.Boolean(false), true, 'Assert is.Boolean(false) should return true');

    assert.equal(is.Float(1.2), true, 'Assert is.Float(1.2) should return true');

    assert.equal(is.Number(1.2), true, 'Assert is.Number(1.2) should return true');
    assert.equal(is.Number(new Number), true, 'Assert is.Number(new Number) should return true');
    assert.equal(is.Number(-1.2), true, 'Assert is.Number(-1.2) should return true');

    assert.equal(is.Integer(1), true, 'Assert is.Integer(1) should return true');
    assert.equal(is.Integer(1.0), true, 'Assert is.Integer(1.0) should return true');
    assert.equal(is.Integer(1.1), false, 'Assert is.Integer(1.1) should return false');
    assert.equal(is.Integer('1'), false, 'Assert is.Integer("1") should return false');
    assert.equal(is.Integer([]), false, 'Assert is.Integer([]) should return false');

    assert.equal(is.Global(global), true, 'Assert is.Global(global) should return true');

    assert.equal(is.Empty(''), true, 'Assert is.Empty("") should return true');
    assert.equal(is.Empty([]), true, 'Assert is.Empty([]) should return true');
    assert.equal(is.Empty({}), true, 'Assert is.Empty({}) should return true');
    assert.equal(is.Empty({ a: 'test' }), false, 'Assert is.Empty({ a: "test" }) should return false');
};

if (module == require.main) {
    require('test').run(exports);
}