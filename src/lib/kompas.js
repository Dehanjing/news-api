module.exports = function (fn) {
  this.validate(fn);
  axios
    .get(`https://news.kompas.com/`, config)
    .then((response) => {
      const hasil = [];
      const $ = cheerio.load(response.data);
      $("ul#latest_content > li.box-shadow-new > div.ListCol").each(function (
        i,
        elem
      ) {
        hasil.push({
          title: $(this).find("h3 > a").text().trim(),
          news_url: $(this).find("a").attr("href"),
          thumbnail: $(this).find("img.lozad").attr("data-src"),
          category: $(this).find("strong > a").text().trim(),
          upload_date: $(this)
            .find("div.article__channel")
            .text()
            .trim()
            .split(" - ")[1],
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
