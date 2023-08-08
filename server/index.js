const express = require('express');
const cors = require("cors")
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors())

const client_id = proccess.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: client_id,
        clientSecret: client_secret
    })

    spotifyApi.authorizationCodeGrant(code).then(data => (
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    ))
    .catch(() => {
        res.sendStatus(400)
    })
})

app.listen(3001)