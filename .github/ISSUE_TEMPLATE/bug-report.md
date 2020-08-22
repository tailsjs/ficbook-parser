---
name: Bug report
about: Report about bug.
title: ''
labels: bug
assignees: ''

---

EXAMPLE
- What did you do?
I call the getFic() method with id parameters: 1 and it gives me an error: (ERROR)
- What were you hoping for when you called this method?
That everything will work correctly and I will be given an array with information.

Code:
```js
let ficbook = require("ficbook-parser");

console.log(await ficbook.getFic(1))
```
Versions:
|Node|Module|NPM or YARN|
|-|-|-|-|
|12.8.3|1.3|6.14.8|
