module.exports = function (fn) {
  this.validate(fn);
  axios
    .get(`https://fajar.co.id/category/nasional/`, config)
    .then((response) => {
      const hasil = [];
      const $ = cheerio.load(response.data);
      $("article").each(function (i, elem) {
        let title = $(this).find("a.txt__3").text().trim();
        let news_url = $(this).find("a").attr("href");
        let upload_date = $(this).find("span").text().trim();
        let category = $(this).find("li.post-meta").text().trim();
        let thumbnail = $(this)
          .find("img.img-home.wp-post-image")
          .attr("data-cfsrc");
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
