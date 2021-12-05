const fs = require("fs");
let path = require("path");

class NewsApi {
  constructor() {
    global.axios = require("axios").default;
    global.cheerio = require("cheerio").default;
    global.config = {
      method: "GET",
      headers: {
        Creator: "M. Kendor Toge",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
      },
    };
    this._plugins = [];
    this.creator = "M. Kendor Toge";
    this.validate = function (fn) {
      if (typeof fn != "function")
        throw new TypeError("typeof callback must be a function");
      return;
    };
    fs.readdirSync(__dirname + "/lib/").forEach((plugins) => {
      let plugins_ = require("./lib/" + plugins);
      this[plugins.split(".js").shift()] = plugins_;
      let plugz = {};
      plugz[plugins] = plugins_;
      this._plugins.push(plugz);
    });
  }
  plugins() {
    return {
      plugins: this._plugins,
      total: this._plugins.length,
    };
  }
}

module.exports = NewsApi;
