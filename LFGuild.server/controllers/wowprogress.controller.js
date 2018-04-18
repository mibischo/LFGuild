var lfguild = require('../business/lfguild.js');

exports.getlfg = (req, res) => {
    var options = req.query;
    lfguild.scan(options.language, options.raidsPerWeek, options.nrSites, options.orderBy).then(function (result) {
      res.send(result);
    });
};