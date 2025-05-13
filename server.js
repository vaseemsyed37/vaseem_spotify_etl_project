const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080;

// Replace these with your actual Spotify client ID and client secret
const client_id = '';  // Replace with your Spotify client ID
const client_secret = '';  // Replace with your Spotify client secret

// Spotify API base URL
const spotify_base_url = 'https://accounts.spotify.com/authorize';

// Generate the base64-encoded string for the Authorization header
const base64 = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

// Route to handle the authorization flow
app.get('/authorize', (req, res) => {
    const redirect_uri = 'http://127.0.0.1:8080/callback';  // Your redirect URI
    const scope = 'user-library-read user-read-private user-read-email playlist-read-private';  // The required Spotify permissions
    const auth_url = `${spotify_base_url}?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=${scope}`;
    
    res.redirect(auth_url);
});

// This route will handle the callback from Spotify
app.get('/callback', async (req, res) => {
    const code = req.query.code;  // Get the authorization code from the URL query

    // If no code is found, send an error message
    if (!code) {
        return res.status(400).send('Error: Authorization code not found');
    }

    // Request to Spotify API for an access token using the authorization code
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
            code: code,  // The authorization code
            redirect_uri: 'http://127.0.0.1:8080/callback',  // Your redirect URI
            grant_type: 'authorization_code'  // Grant type for the authorization code flow
        }), {
            headers: {
                'Authorization': `Basic ${base64}`  // Basic auth with client_id and client_secret
            }
        });

        const access_token = response.data.access_token;
        console.log('Access token:', access_token);  // You can now use the access token to make API calls

        // Send success message to the client
        res.send('Access token retrieved successfully!');
    } catch (error) {
        console.error('Error fetching token:', error);
        res.status(500).send('Error fetching token');
    }
});

// Example of fetching user's playlists
app.get('/playlists', async (req, res) => {
    try {
        const access_token = 'BQCJU0kUyRQmdK9NRZ4D3Ay9SxIRC1lfKYoCiPSnV0-ZS-RHdDFqiP-XOHWgvqLVsxZGkKruZew5agm3UUM7oHL3Mic63YgTBXPpAA1IXxPBr4RO93QPL5S8LPfbnyt3d86G8YodUgdewAXZzB16tAc0gJDkJysZC2Stb6bFdDhDap9wAJfsxEUG7qH_WKLGZEqAyO7OECa23vmMwPNsXiBSsfaXagGwQjxA2ONZcKT0HhAvGKc04hNLwrv7xlM7kuAVewr0Eb5AQ76bp7A';  // Use the token you retrieved
        const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
                'Authorization': `Bearer ${access_token}`,
            },
        });

        // Send the playlists data as a response
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching playlists:', error);
        res.status(500).send('Error fetching playlists');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});
