# Modules
* import
* export

Export a `function` or a `variable`

There are two types of exports: Named and Default.

inline
``` javascript
export const name = "Jesse";
export const age = 40;
```
all in one
``` javascript
const name = "Jesse";
const age = 40;

export {name, age};
```

Onlye ONE defalut export:
``` javascript
const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;
```

# Import
## Import from named exports
``` javascript
import { name, age } from "./person.js";
```
## Import from default exports
``` javascript
import message from "./message.js";
```

🚩 Modules only work with the HTTP(s) protocol. A web-page opened via the file:// protocol cannot use import / export.


# React JS
Virtual DOM: 

# Componentes