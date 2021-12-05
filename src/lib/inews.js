module.exports = function (fn) {
  this.validate(fn);
  axios
    .get(`https://www.inews.id/news`, config)
    .then((response) => {
      const hasil = [];
      const $ = cheerio.load(response.data);
      $("div.wdtop-row.more-news").each(function (i, elem) {
        let title = $(this).find("h2.wdtop-text").text().trim();
        let upload_date = $(this)
          .find("span.wd-date")
          .text()
          .trim()
          .slice(0, 35);
        let category = $(this).find("span.wd-date > strong").text().trim();
        let news_url = $(this).find("a").attr("href");
        let thumbnail = $(this).find("div.lazy.wdtop-col-img").attr("data-src");
        const result = {
          title,
          news_url,
          thumbnail,
          category,
          upload_date,
        };
        hasil.push(result);
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
