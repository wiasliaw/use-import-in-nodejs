## solution
1. use babel-node
package @babel/node
> npx babel-node server.js
> or
> npm run start_one

[ref_1](https://stackoverflow.com/questions/42645548/using-import-in-nodejs-server)
[ref_2](https://github.com/babel/example-node-server)

2. use babel-register
> package @babel/register @babel/polyfill
> touch index.js
```js=
require('@babel/register');
require('@babel/polyfill');
require('./server.js');
```
> node index.js
> or
> npm run start_two

[ref_1](https://babeljs.io/docs/en/babel-register)
[ref_2](https://github.com/babel/babel/issues/8321)
[ref_3](https://babeljs.io/docs/en/babel-cli)
[ref_4](https://babeljs.io/docs/en/babel-register)
[ref_5](https://babeljs.io/docs/en/babel-node)
