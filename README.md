## News-API
 > ***Simple News-API scrapper library***

```diff
@@ Created on 1-12-21 | Dehanjing @@
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
| 1 | CNN | Get news on [CNN ID](https://www.cnnindonesia.com/) |
| 2 | BBC | Get news on [BBC ID](https://www.bbc.com/indonesia) |
| 3 | CNBC | Get news on [CNBC](https://www.cnbcindonesia.com/news/) |

## Examples

```javascript
"use strict";
let NewsAPI = require("@dhnapi/news-api");
let dapi = new NewsAPI();

/**
 *
 * CNN - ID
 * @param callback {Function}
 *
**/

dapi.cnn((response, error) => {
   if (error) return console.error(error.stack);
   
   /**
    * @return response {Object}
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
```