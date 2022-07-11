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

module.exports = router;
