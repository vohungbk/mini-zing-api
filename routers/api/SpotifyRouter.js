const express = require("express");
const router = express.Router();

const SpotifyController = require("../../controllers/SpotifyController");

// getRecommendations
router.get("/getRecommendations", SpotifyController.getRecommendations);

// getTrack
router.get("/getTrack", SpotifyController.getTrack);

// get NewReleases
router.get("/getNewReleases", SpotifyController.getNewReleases);

// get top Playlist
router.get("/getTopPlaylists", SpotifyController.getTopPlaylist);

// get featured playlist
router.get("/getFeaturedPlaylists", SpotifyController.getFeaturedPlaylists);

// get Categoris
router.get("/getCategories", SpotifyController.getCategories);

// get Album
router.get("/getAlbum", SpotifyController.getAlbum);

// get Playlist
router.get("/getPlaylist", SpotifyController.getPlaylist);

// get Category
router.get("/getCategory", SpotifyController.getCategory);

// get CategoryPlaylists
router.get("/getCategoryPlaylists", SpotifyController.getCategoryPlaylists);

// get Artists
router.get("/getArtists", SpotifyController.getArtists);

// get Artist
router.get("/getArtist", SpotifyController.getArtist);

// get Top Track
router.get("/getTopTrack", SpotifyController.getTopTrack);

// get Related Artists
router.get("/getRelatedArtists", SpotifyController.getRelatedArtists);

// get Album Artists
router.get("/getAlbumArtists", SpotifyController.getAlbumArtists);

module.exports = router;
