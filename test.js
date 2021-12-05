"use strict";
const NewsAPI = require("./src/");
let dapi = new NewsAPI();

/*
  CNN - Indonesia
  @param callback {Function}
*/

dapi.cnn((response, error) => {
  if (error) return console.error(error.stack);

  /**
   * @return response {Object}
   * @object AxiosResponse
   */

  return console.info("success scrapping ~~", response.data);
});
