module.exports = (app) => {
    const wowprogress = require('../controllers/wowprogress.controller.js');

    app.get('/api/getlfg', wowprogress.getlfg);

}