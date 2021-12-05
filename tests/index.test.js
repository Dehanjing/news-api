let NewsApi = require("../src/");
let dapi = new NewsApi();
let number = 1;

dapi._plugins.forEach((plugin_, index) => {
  for (let plugin of Object.keys(plugin_)) {
    plugin = plugin.slice(0, -3);
    __scrapper(dapi, plugin);
  }
});

function __scrapper(dapi, plugin) {
  dapi[plugin]((response, error) => {
    console.log(number++ + ". checking plugin -", plugin + ".js ---");
    if (error) return console.error("error plugin " + plugin + "\n", error.stack);

    // passed error
    return console.info("plugin " + plugin + " is tested out and not found any problem!", response.data.status);
  });
}