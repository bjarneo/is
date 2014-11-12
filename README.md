is.js
==

JavaScript isser library. Node, AMD and browser support

**No jQuery needed.**

Documentation:

####is.Object();
```javascript
is.Object({ name: 'isJs' });
// Returns true
```

####is.Function();
```javascript
is.Function(function() {});
// Returns true
```

####is.Undefined();
```javascript
var test;
is.Undefined(test);
// Returns true
```

####is.Array();
```javascript
is.Array(['a', 'b', 'c']);
// Returns true
```

####is.Date();
```javascript
is.Date(new Date);
// Returns true
```

####is.RegExp();
```javascript
is.RegExp(/a-z/);
// Returns true
```

####is.String();
```javascript
is.String('my string');
// Returns true
```

####is.Number();
```javascript
is.Number(123);
// Returns true

is.Number(1.1);
// Returns true

is.Number(-123);
// Returns true

is.Number(-1.2);
// Returns true
```

####is.Integer();
```javascript
is.Integer(1);
// Returns true

is.Integer(1.0);
// Returns true
```

####is.Float();
```javascript
is.Float(1.1);
// Returns true


is.Float(-1.1);
// Returns true
```

####is.Global();
```javascript
is.Global(window);
// Returns true
```