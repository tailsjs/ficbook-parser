# ficbook-parser
Парсер фанфиков с ficbook.net

- Первый в своём роде.
- Тайпинги.
- Своё API.

## Installing
* NPM
`
npm install shrtco.de
`
* YARN
`
yarn add shrtco.de
`

## Использование
```js
let ficbook = require("ficbook-parser") 
```

### Методы
Информация о фанфике
```js
await ficbook.getFic(id, random)
```
|Аргумент|Тип|Нужен|Описание|
|-|-|-|-|
|id|number|true|ID фанфика|
|random|boolean|false|получить рандомный фанфик?|
Возвращается:
```js
{
  success: true,
  name: 'Если деинсталлиться, то вместе',
  id: 1,
  url: 'https://ficbook.net/readfic/1',
  // Много информации. ОЧЕНЬ
}
```
Информация о авторе
```js
await ficbook.getAuthor(id, getComms)
```
|Аргумент|Тип|Нужен|Описание|
|-|-|-|-|
|id|number|true|ID автора|
|getComms|boolean|false|Получить комменты?|
Возвращается:
```js
{
  success: true,
  name: 'Entrery',
  id: 1,
  url: 'https://ficbook.net/authors/1',
  favorite_readers: 504,
  works: 0,
  coauthor: 0,
  beta: 0,
  gamma: 0,
  requ: 1,
  collections: 1,
  gifts: 23,
  about: '',
  contact: '',
  online: false,
  comments: []
}
```
Информация о заявках
```js
await ficbook.getRequest(id)
```
|Аргумент|Тип|Нужен|Описание|
|-|-|-|-|
|id|number|true|ID запроса|
Возвращается:
```js
{
  success: true,
  name: 'Айрис и Рокэ приглядываются друг к другу, и Росио решает, что Мирабелла в тещах не так уж и страшно',
  id: 1,
  url: 'https://ficbook.net/requests/1',
  author: 'Гусар на крыше',
  premium: false,
  interested: '32',
  works_done: '2',
  marks: '13',
  fandoms: [ 'Камша Вера «Отблески Этерны»' ],
  characters: [ 'Рокэ/Айрис', ' Ричард мимо пробегал.' ],
  direction: ['Гет'],
  tags: [ 'Романтика', 'Юмор' ],
  rating: ['PG-13' ,'R'],
  description: 'Таймлан - не позднее ЛП. Айрис ревнует Ворона ко всему, что движется - к Катарине, Селине, Луизе, Дораку, королю и брату, громко заявляет, что Ворон - ЕЕ жених. Лучше всего с R и ХЭ, но это уже на усмотрение автора.'
}
```
Получить журнал изменений
```js
await ficbook.getChangelogs()
```
Возвращается:
```js
{
  success: true,
  MODULE: { VERSION: '1.1', LOGS: 'Changelogs! getChangelogs()' },
  SERVER: {
    VERSION: '1.1',
    LOGS: 'Now the "direction" and "rating" fields in the getRequest() method return an array instead of a string as they did in sv1.0'
  }
}
```
Получить часть из фанфика
```js
await ficbook.getFicPart()
```
Возвращается:
```js
{
  success: true,
  name: "Example",
  id: 14,
  url: "https://ficbook.net/readfic/14",
  links: ["well, links"],
  parts_length: 14,
  parts: "Some part."
}
```
### Ошибки:
Может выдать ошибку
```js
There is no such (something)!
```
Если что-то не было найдено!
