# is-success [![Build Status](https://travis-ci.org/arthurvr/is-success.svg?branch=master)](https://travis-ci.org/arthurvr/is-success)

> Check if a number is [a HTTP success status code](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success)


## Install

```
$ npm install --save is-success
```


## Usage

```js
var isSuccess = require('is-success');

isSuccess(200);
//=> true

isSuccess(400);
//=> false
```


## Related

* [is-redirect](https://github.com/sindresorhus/is-redirect)
* [is-server-error](https://github.com/arthurvr/is-server-error)

## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
