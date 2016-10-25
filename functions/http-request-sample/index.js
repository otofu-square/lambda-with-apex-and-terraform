const axios = require("axios");

console.log('starting function')
exports.handle = function(e, ctx, cb) {
  axios.get("https://www.google.co.jp")
    .then((response) => {
      console.log(response);
      cb(null, response.status);
    })
    .catch((error) => {
      console.log(error);
      cb(null, error.status);
    });

  console.log('processing event: %j', e)
}
