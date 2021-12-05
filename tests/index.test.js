let NewsApi = require("../src/");
let dapi = new NewsApi();

dapi._plugins.forEach(plugin_ => {
  for (let plugin of Object.keys(plugin_)) {
    plugin = plugin.slice(0, -3);
    dapi[plugin](function(response, error) {
      console.log("checking plugin -", plugin + ".js");
      if (error) return console.error("error plugin " + plugin + "\n", error.stack);

      // passed error
      return console.info("plugin " + plugin + " is tested out and not found any problem!", response.data.status);
    });
  }
});