## News-API
 > ***Simple News-API scrapper library***

```diff
@@ Created on 1-12-21 | Dehanjing @@
+ Updated on 3-12-21 | Dehanjing
```

## Installation

<h4>
  using npm package manager
</h4>

  > *npm install @dhnapi/news-api*

<h4>
  using yarn package manager
</h4>

  > *yarn add @dhnapi/news-api*

## Features

| NO | NAME | DESCRIPTION |
|----|------|-------------|
| 1 | Antara | Get news on [Antara](https://m.antaranews.com/terkini) |
| 2 | BBC | Get news on [BBC](https://www.bbc.com/indonesia) |
| 3 | CNBC | Get news on [CNBC](https://www.cnbcindonesia.com/news/) |
| 4 | CNN | Get news on [CNN](https://www.cnnindonesia.com/) |
| 5 | Daily | Get news on [Daily](https://www.dailynewsindonesia.com/rubrik/news/) |
| 6 | Detik | Get news on [Detik](https://www.detik.com/terpopuler/) |
| 7 | Fajar | Get news on [Fajar](https://fajar.co.id/category/nasional/) |
| 8 | IDN | Get news on [IDN](https://www.idntimes.com/news/) |
| 9 | Indozone | Get news on [Indozone](https://www.indozone.id/index/) |
| 10 | INews | Get news on [INews](https://www.inews.id/news/) |
| 11 | Kompas | Get news on [Kompas](https://news.kompas.com/) |
| 12 | Kontan | Get news on [Kontan](https://www.kontan.co.id/) |

## Example

```javascript
"use strict";
let NewsAPI = require("@dhnapi/news-api");
let dapi = new NewsAPI();

// @return {Object} class
// console.log(dapi);

/**
 *
 * CNN - ID
 * @param callback {Function}
 *
**/

dapi.cnn((response, error) => {
   if (error) return console.error(error.stack);
   
   /**
    * @return {Object} response
    * @object AxiosResponse
   **/
   
   return console.info("success scrapping ~~", JSON.stringify(response.data, null, 2));
});
```

## Information

```diff
+ dont forget to star <3
! contribute to this project! ~~~
- please add issue if you having problem with installation

! github: https://github.com/Dehanjing/news-api
```