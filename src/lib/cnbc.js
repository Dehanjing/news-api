module.exports = function (fn) {
  this.validate(fn);
  axios
    .get("https://www.cnbcindonesia.com/indeks", config)
    .then((response) => {
      const hasil = [];
      const $ = cheerio.load(response.data);
      $("article.list__item.clearfix").each(function (i, elem) {
        hasil.push({
          title: $(this).find("h4").text().trim(),
          news_url: $(this).find("a").attr("href"),
          upload_date: $(this).find("span.date").text().trim(),
          thumbnail: $(this).find("img").attr("src"),
        });
      });
      response.data = {
        status: response.status,
        result: hasil.filter(({ title, upload_date }) => title && upload_date),
      };
      fn(response, null);
    })
    .catch((error) => fn(null, error));
};
