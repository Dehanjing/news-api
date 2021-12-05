module.exports = function (fn) {
  this.validate(fn);
  axios
    .get(`https://m.antaranews.com/terkini`, config)
    .then((response) => {
      const hasil = [];
      const $ = cheerio.load(response.data);
      $("div.row.item").each(function (i, elem) {
        hasil.push({
          title: $(this).find("h3").text(),
          news_url: $(this).find("a").attr("href"),
          category: $(this).find("div.meta > a").text(),
          upload_date: $(this).find("div.meta").text().trim().split(" - ")[1],
          thumbnail: $(this).find("img").attr("data-src"),
        });
      });
      response.data = {
        status: response.status,
        result: hasil.filter(({ title }) => title),
      };
      fn(response, null);
    })
    .catch((error) => fn(null, error));
};
