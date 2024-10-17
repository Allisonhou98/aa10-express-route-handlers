// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here 

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log the request body for testing
app.use((req, res, next) => {
    console.log('Request Body:', req.body);
    next();
});

// Route to get all artists
app.get('/artists', (req, res) => {
    const artists = getAllArtists();
    res.status(200).json(artists);
});

// Route to add a new artist
app.post('/artists', (req, res) => {
    const newArtist = req.body;
    const createdArtist = addArtist(newArtist);
    res.status(201).json(createdArtist);
});

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}