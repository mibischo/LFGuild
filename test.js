var lfguild = require('./LFGuild.server/business/lfguild.js');

options = {
    language: 'de',
    raidsPerWeek: 3,
    nrSites: 1,
    orderBy: 'ts',
}

lfguild.scan(options.language, options.raidsPerWeek, options.nrSites, options.orderBy).then(function (result) {
    res.send(result);
});