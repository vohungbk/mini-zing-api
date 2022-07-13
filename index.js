const path = require("path");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("alo", { authHeader });

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Page Home
app.get("/", authenticateJWT, (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// SpotifyRouter
const SpotifyRouter = require("./routers/api/SpotifyRouter");
app.use("/api", cors(), SpotifyRouter);

// Page Error
app.get("*", (req, res) => {
  res.send("Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<");
});

app.listen(port, () => {
  console.log(`Start server listen at http://localhost:${port}`);
});
