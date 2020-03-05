is.js
==

JavaScript isser library. Node, AMD and browser support

# Install:
```bash
npm i --save isdotjs
```

## Documentation:

### Imports
```javascript
import is from 'isdotjs';
import is from 'isdotjs/dist/isdotjs.m'; // Module
import is from 'isdotjs/dist/isdotjs.umd'; // UMD
import is from 'isdotjs/dist/isdotjs'; // CJS
```

### is.Array();
```javascript
is.Array(['a', 'b', 'c']);
// Returns true
```

### is.Object();
```javascript
is.Object({ name: 'isJs' });
// Returns true
```

### is.Function();
```javascript
is.Function(function() {});
// Returns true
```

### is.Undefined();
```javascript
var test;
is.Undefined(test);
// Returns true
```

### is.String();
```javascript
is.String('my string');
// Returns true
```

### is.Empty();
```javascript
is.Empty({});
// Returns true

is.Empty([]);
// Returns true

is.Empty('');
// Returns true
```

### is.Number();
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

### is.Integer();
```javascript
is.Integer(1);
// Returns true

is.Integer(1.0);
// Returns true
```

### is.Float();
```javascript
is.Float(1.1);
// Returns true

is.Float(-1.1);
// Returns true
```

### is.Boolean();
```javascript
is.Boolean(true);
// Returns true

is.Boolean(false);
// Returns true
```

### is.Null();
```javascript
is.Null(null);
// Returns true
```

### is.Element();
```javascript
var el = document.createElement('div');
is.Element(el);
// Returns true
```

### is.Date();
```javascript
is.Date(new Date);
// Returns true
```

### is.RegExp();
```javascript
is.RegExp(/a-z/);
// Returns true
```

### is.Global();
```javascript
is.Global(window);
// Returns true
```