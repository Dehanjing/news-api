module.exports = function (fn) {
  this.validate(fn);
  axios
    .get(
      `https://www.detik.com/terpopuler?tag_from=framebar&_ga=2.250751302.1905924499.1623147163-1763618333.1613153099`,
      config
    )
    .then((response) => {
      const hasil = [];
      const $ = cheerio.load(response.data);
      $("article").each(function (i, elem) {
        hasil.push({
          title: $(this)
            .find("div > div > h3.media__title > a.media__link")
            .text()
            .trim(),
          news_url: $(this).find("a.media__link").attr("href"),
          thumbnail: $(this).find("img").attr("src").replace("?w=220&q=90", ""),
          upload_date: $(this).find("div.media__date > span").attr("title"),
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
