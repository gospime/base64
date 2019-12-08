# Encode string from some encoding to another encoding

Example:
```node
import base64 from '@gospime/base64';

const encoded = base64.encode('foo');
const decoded = base64.decode(encoded);

const isEqual = encoded === decoded;

console.log(`Encoded: ${encoded}, Result: ${decoded}`);
```
