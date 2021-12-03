module.exports = function(fn) {
  this.validate(fn);
  axios.get(`https://www.dailynewsindonesia.com/rubrik/news`, {
    method: 'GET',
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
    }
  }).then((response) => {
    const hasil = [];
    const $ = cheerio.load(response.data);
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