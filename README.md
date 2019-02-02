## solution
1. use babel-node
> package @babel/node
> npx babel-node server.js

[1](https://stackoverflow.com/questions/42645548/using-import-in-nodejs-server)
[2](https://github.com/babel/example-node-server)

2. use babel-register
> package @babel/register @babel/polyfill
> touch index.js
```js=
require('@babel/register');
require('@babel/polyfill');
require('./server.js');
```
> node index.js

[1](https://babeljs.io/docs/en/babel-register)
[2](https://github.com/babel/babel/issues/8321)
[3](https://babeljs.io/docs/en/babel-cli)
[4](https://babeljs.io/docs/en/babel-register)
[5](https://babeljs.io/docs/en/babel-node)
