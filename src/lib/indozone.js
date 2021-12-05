module.exports = function (fn) {
  this.validate(fn);
  axios
    .get(`https://www.indozone.id/index`, config)
    .then((response) => {
      const hasil = [];
      const $ = cheerio.load(response.data);
      $("ul.news_box.square_box.image-left")
        .find("li")
        .each(function (i, elem) {
          hasil.push({
            title: $(this).find("h3").text().trim(),
            news_url: $(this).find("a").attr("href"),
            thumbnail: $(this).find("img").attr("src"),
            category: $(this).find("div.text").text().trim(),
            upload_date: $(this).find("div.info.un-i").text().trim(),
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
