module.exports = function (fn) {
  this.validate(fn);
  axios
    .get("https://www.idntimes.com/news", config)
    .then((response) => {
      let hasil = [];
      const $ = cheerio.load(response.data);
      $("div.card__article.card__article--horizontal").each(function (i, elem) {
        hasil.push({
          title: $(this).find(".card__article--title-horizontal").text().trim(),
          news_url: $(this).find("a").attr("href"),
          thumbnail: $(this).find(".blur-up.medium-thumbnail").attr("data-src"),
          category: $(this).find(".category").text().trim(),
          upload_date: $(this).find(".date").text().trim(),
        });
      });
      response.data = {
        status: response.status,
        result: hasil.filter(
          ({ title, upload_date }) => (title && upload_date) !== ""
        ),
      };
      fn(response, null);
    })
    .catch((error) => fn(null, error));
};
