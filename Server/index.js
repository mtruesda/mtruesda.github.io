const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.get('/recently-played', async (req, res) => {
  const { steamid } = req.query;
  console.log(steamid);
  const apiKey = process.env.REACT_APP_STEAM_API_KEY;

  if (!steamid || !apiKey) {
    return res.status(400).json({ error: 'Missing steamid or API key' });
  }
  // api url call
  const url = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${apiKey}&steamid=${steamid}&format=json`;
  console.log("URL: ", url);
  try {
    const response = await axios.get(url);
    console.log(response)
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Steam API' });
  }
});

app.get('/', (req, res) => {
  res.send('Server is alive');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
