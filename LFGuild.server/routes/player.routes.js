module.exports = (app) => {
    const players = require('../controllers/player.controller.js');

    // Create a new Player
    app.post('/api/players', players.create);

    // Retrieve all Players
    app.get('/api/players', players.findAll);

    // Retrieve a single Player with playerId
    app.get('/api/players/:playerId', players.findOne);

    // Update a Player with playerId
    app.put('/api/players/:playerId', players.update);

    // Delete a Player with playerId
    app.delete('/api/players/:playerId', players.delete);
}