# Personal Website Project

# ./Server

This is how I'm handling api calls to steam because steam gets mad about cross origin.

To run,

`cd Server && node index.js`

make sure you have a steam key kept in a .env file within Server of the format `REACT_APP_STEAM_API_KEY=XXXXXXXXXXXXXXXXXX`

# ./Website

This is where the bulk of my website will be located.

To run,

`cd Website && npm start`

# Mischellaneous

The only thing that will prevent you from hosting locally is a lack of API keys for the steam API calls in some of the pages. These are not published to github.