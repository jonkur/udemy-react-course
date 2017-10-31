const moment = require.requireActual('moment'); // normal import would not work, would call this moment mock file. This is why requireActual is used.

export default (timestamp = 0) => {
  return moment(timestamp);
};