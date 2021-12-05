module.exports = function (fn) {
  this.validate(fn);
  axios
    .get("https://www.bbc.com/indonesia", config)
    .then((response) => {
      const hasil = [];
      const $ = cheerio.load(response.data);
      $("li.e57qer20.bbc-lpu9rr.eom0ln51").each(function (i, elem) {
        hasil.push({
          title: $(this).find("p").text().trim(),
          news_url: "https://www.bbc.com" + $(this).find("a").attr("href"),
          upload_date: $(this).find("time").text().trim(),
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
