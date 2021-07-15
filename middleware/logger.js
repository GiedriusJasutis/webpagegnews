const util = require('util');

// Search keywords
const searchLogger = async (req, res, next) => {
  // console.log('loger logs: ' + JSON.stringify(req.body));
  console.log(util.inspect(req.body, false, null));
  next();
};

module.exports = {
  searchLogger,
};
