module.exports = function (fn) {
  this.validate(fn);
  axios({
    url: "https://www.cnnindonesia.com/api",
    method: "POST",
    data: new URLSearchParams(
      Object.entries({
        limit: 4,
        typechannel: 5,
        type: 3,
      })
    ),
    headers: {
      "Accept-Action": "bydate%2F2",
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
      Creator: this.creator,
    },
  })
    .then((response) => {
      const hasil = [];
      response.data.data.forEach((_data) => {
        delete _data.strisi;
        hasil.push(_data);
      });
      response.data = {
        status: response.status,
        result: hasil,
      };
      fn(response, null);
    })
    .catch((error) => fn(null, error));
};
