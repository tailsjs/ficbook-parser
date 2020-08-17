# shrtco.de
Library for shrtco.de API

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9cc6d03e97464f84b80dd87bda36c07e)](https://www.codacy.com/app/tailsjs/shrtco.de?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=tailsjs/shrtco.de&amp;utm_campaign=Badge_Grade)
## Installing
* NPM
`
npm install shrtco.de
`
* YARN
`
yarn add shrtco.de
`

## Using
```js
let shrtcode = require("shrtco.de") 
```

### Methods
Shorten a link
```js
shrtcode.shorten(link)
```
|Argument|Type|Required|Description|
|-|-|-|-|
|link|string|true|Link for shorting|
Return:
```js
{
　"ok": true,
　"result": {
　　"code": "z2d2o",
　　"short_link": "shrtco.de/z2d2o",
　　"full_short_link": "https://shrtco.de/z2d2o",
　　"short_link2": "9qr.de/z2d2o",
　　"full_short_link2": "https://9qr.de/z2d2o",
　　"share_link": "shrtco.de/share/z2d2o",
　　"full_share_link": "https://shrtco.de/share/z2d2o",
　　"original_link": "http://example.org/very/long/link.html"
　}
}
```
Get infos on a short link by some code
```js
shrtcode.info(code) 
```
|Argument|Type|Required|Description|
|-|-|-|-|
|code|string|true|Code for info about shorten link|
Return:
```js
{
　"ok": true,
　"result": {
　　"code": "example",
　　"url": "http://www.example.com/",
　　"password_protected": false,
　　"blocked": false,
　　"created": "2018-05-17 16:46:29",
　　"timestamp": 1526568389
　}
}
```
Shorten a link with custom code
```js
shrtcode.customShorten(link, code) 
```
|Argument|Type|Required|Description|
|-|-|-|-|
|link|string|true|Link for shorting|
|-|-|-|-|
|code|string|true|Your code for shorted url|
Return:
```js
{
  ok: true,
  result: {
    code: 'example',
    short_link: 'shrtco.de/example',
    full_short_link: 'https://shrtco.de/example',
    short_link2: '9qr.de/example',
    full_short_link2: 'https://9qr.de/example',
    share_link: 'shrtco.de/share/shrtcode_example767837',
    full_share_link: 'https://shrtco.de/share/example',
    original_link: 'http://example.com'
  }
}
```
Shorten a link by emoji
```js
shrtcode.emojiCode(link)
```
|Argument|Type|Required|Description|
|-|-|-|-|
|link|string|true|Link for shorting|
Return:
```js
{
  ok: true,
  result: {
    code: '��',
    short_link: 'shrtco.de/��',
    full_short_link: 'https://shrtco.de/��',
    short_link2: '9qr.de/��',
    full_short_link2: 'https://9qr.de/��',
    share_link: 'shrtco.de/share/��',
    full_share_link: 'https://shrtco.de/share/��',
    original_link: 'http://example.com'
  }
}
```
Shorten a link with password
```js
shrtcode.passShort(link, pass) 
```
|Argument|Type|Required|Description|
|-|-|-|-|
|link|string|true|Link for shorting|
|-|-|-|-|
|pass|string|true|Your password for shorted url|
Return:
```js
{
  ok: true,
  result: {
    code: 'BnNeu',
    short_link: 'shrtco.de/BnNeu',
    full_short_link: 'https://shrtco.de/BnNeu',
    short_link2: '9qr.de/BnNeu',
    full_short_link2: 'https://9qr.de/BnNeu',
    share_link: 'shrtco.de/share/BnNeu',
    full_share_link: 'https://shrtco.de/share/BnNeu',
    original_link: 'http://example.com'
  }
}
```