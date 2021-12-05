module.exports = function (fn) {
  this.validate(fn);
  axios
    .get(`https://www.kontan.co.id/`, config)
    .then((response) => {
      let hasil = [];
      const $ = cheerio.load(response.data);
      $("div.news-list > ul > li").each(function (i, elem) {
        let title = $(this).find("div.box-news.fleft > a > h1").text().trim();
        let news_url = $(this).find("a").attr("href");
        let thumbnail = $(this)
          .find("div.image-thumb")
          .find("img")
          .attr("data-src");
        let category = $(this).find("a.link-orange").text().trim();
        let upload_date = $(this)
          .find("div.box-news.fleft")
          .find(".meta.fs12")
          .text()
          .split(category + " | ")[1]
          .trim();
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
