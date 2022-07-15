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
  getPlaylist(req, res) {
    spotifyApi.setAccessToken(req.headers.authorization?.split(" ")[1]);
    spotifyApi.getPlaylist(req.query.id).then(
      function (data) {
        res.json({ data: { data: data.body } });
      },
      function (err) {
        console.error(err);
      }
    );
  }

  getCategory(req, res) {
    spotifyApi.setAccessToken(req.headers.authorization?.split(" ")[1]);
    spotifyApi.getCategory(req.query.id).then(
      function (data) {
        res.json({ data: { data: data.body } });
      },
      function (err) {
        console.log(err);
      }
    );
  }
  getCategoryPlaylists(req, res) {
    spotifyApi.setAccessToken(req.headers.authorization?.split(" ")[1]);
    spotifyApi.getPlaylistsForCategory(req.query.id).then(
      function (data) {
        res.json({ data: { data: data.body } });
      },
      function (err) {
        console.log(err);
      }
    );
  }
  getArtists(req, res) {
    spotifyApi.setAccessToken(req.headers.authorization?.split(" ")[1]);
    spotifyApi.getArtists(req.query.ids).then(
      function (data) {
        res.json({ data: { data: data.body } });
      },
      function (err) {
        console.log(err);
      }
    );
  }

  getArtist(req, res) {
    spotifyApi.setAccessToken(req.headers.authorization?.split(" ")[1]);
    spotifyApi.getArtist(req.query.id).then(
      function (data) {
        res.json({ data: { data: data.body } });
      },
      function (err) {
        console.log(err);
      }
    );
  }

  getTopTrack(req, res) {
    spotifyApi.setAccessToken(req.headers.authorization?.split(" ")[1]);
    spotifyApi.getArtistTopTracks(req.query.id, "VN").then(
      function (data) {
        res.json({ data: { data: data.body } });
      },
      function (err) {
        console.log(err);
      }
    );
  }

  getRelatedArtists(req, res) {
    spotifyApi.setAccessToken(req.headers.authorization?.split(" ")[1]);
    spotifyApi.getArtistRelatedArtists(req.query.id).then(
      function (data) {
        res.json({ data: { data: data.body } });
      },
      function (err) {
        console.log(err);
      }
    );
  }

  getAlbumArtists(req, res) {
    spotifyApi.setAccessToken(req.headers.authorization?.split(" ")[1]);
    spotifyApi.getArtistAlbums(req.query.id).then(
      function (data) {
        res.json({ data: { data: data.body } });
      },
      function (err) {
        console.log(err);
      }
    );
  }
}

module.exports = new SpotifyController();
