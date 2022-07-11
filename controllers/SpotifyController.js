var SpotifyWebApi = require("spotify-web-api-node");

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

class SpotifyController {
  getRecommendations(req, res) {
    spotifyApi.setAccessToken(req.headers.authorization?.split(" ")[1]);

    spotifyApi.getRecommendations(req.query).then(
      function (data) {
        res.json({ data: { data: data.body } });
      },
      function (err) {
        console.error(err);
      }
    );
  }
  getTrack(req, res) {
    spotifyApi.setAccessToken(req.headers.authorization?.split(" ")[1]);
    spotifyApi.getTrack(req.query.trackId).then(
      function (data) {
        console.log({ data });
        res.json({ data: { data: data.body } });
      },
      function (err) {
        console.error(err);
      }
    );
  }
  getNewReleases(req, res) {
    spotifyApi.setAccessToken(req.headers.authorization?.split(" ")[1]);
    spotifyApi.getNewReleases(req.query.country).then(
      function (data) {
        res.json({ data: { data: data.body } });
      },
      function (err) {
        console.error(err);
      }
    );
  }
  getTopPlaylist(req, res) {
    spotifyApi.setAccessToken(req.headers.authorization?.split(" ")[1]);
    spotifyApi.getPlaylist(req.query.playlist, req.query.fields).then(
      function (data) {
        res.json({ data: { data: data.body } });
      },
      function (err) {
        console.error(err);
      }
    );
  }
  getFeaturedPlaylists(req, res) {
    spotifyApi.setAccessToken(req.headers.authorization?.split(" ")[1]);
    spotifyApi.getFeaturedPlaylists(req.query.country).then(
      function (data) {
        res.json({ data: { data: data.body } });
      },
      function (err) {
        console.error(err);
      }
    );
  }
  getCategories(req, res) {
    spotifyApi.setAccessToken(req.headers.authorization?.split(" ")[1]);
    spotifyApi.getCategories(req.query.country).then(
      function (data) {
        res.json({ data: { data: data.body } });
      },
      function (err) {
        console.error(err);
      }
    );
  }
  getAlbum(req, res) {
    spotifyApi.setAccessToken(req.headers.authorization?.split(" ")[1]);
    spotifyApi.getAlbum(req.query.albumId).then(
      function (data) {
        res.json({ data: { data: data.body } });
      },
      function (err) {
        console.error(err);
      }
    );
  }
}

module.exports = new SpotifyController();
