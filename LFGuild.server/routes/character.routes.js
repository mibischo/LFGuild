module.exports = (app) => {
    const characters = require('../controllers/character.controller.js');

    // Create a new character
    app.post('/api/characters', characters.create);

    // Retrieve all characters
    app.get('/api/characters', characters.findAll);

    // Retrieve a single character with characterId
    app.get('/api/characters/:hash', characters.findOne);

    // Update a character with characterId
    app.put('/api/characters/:hash', characters.update);
    
    app.put('/api/characters/:hash/rate/:rating', characters.rate);

    // Delete a character with characterId
    app.delete('/api/characters/:hash', characters.delete);
}