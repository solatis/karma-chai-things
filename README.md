karma-chai-things
================

  * [Chai](http://chaijs.com)
  * [Chai-Things](http://chaijs.com/plugins/chai-things)

for [Karma](http://karma-runner.github.io)

Requirements
------------

This Karma plugin requires Karma `~0.6+`

Installation
------------

Install the module via npm

```sh
$ npm install --save-dev karma-chai-things
```

Add `chai-things` to the `frameworks` key in your Karma configuration:

```js
module.exports = function(config) {
  'use strict';
  config.set({
    frameworks: ['mocha', 'chai-things', 'chai'],
    #...
  });
}
```

Keep in mind that, since Karma loads its frameworks in reverse and `chai-things` depends on `chai`, you should declare it accordingly as done above.

karma-chai-things currently does not support AMD/RequireJS, mainly because I cannot figure out the way this dependency should be injected. I encourage other people to look into this and hack it to make it work!
