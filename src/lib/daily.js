module.exports = function(fn) {
  this.validate(fn);
  axios.get(`https://www.dailynewsindonesia.com/rubrik/news`, config)
  .then((response) => {
    const hasil = [];
    const $ = cheerio.default.load(response.data);
    $('div.jeg_posts.jeg_load_more_flag > article').each(function(i, elem) {
      hasil.push({
        title: $(this).find('h3.jeg_post_title').text().trim(),
        news_url: $(this).find('a').attr('href'),
        thumbnail: $(this).find('img').attr('data-src'),
      });
    });
    response.data = {
      status: response.status,
      result: hasil.filter(({
        title
      }) => title)
    };
    fn(response, null);
  }).catch(error => fn(null, error));
};
