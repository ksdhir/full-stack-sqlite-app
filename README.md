# Demo of a barebones full-stack app with SQL backend

This is the absolute barebone example of a full stack application,
using REST API as the backend and pure Javascript as the frontend.

## Database setup

Run 'node prase.js' to transfer the BikeRackData.csv file into a 
a table BikeRackData inside the sqlite.database file.

## API setup

Look at index.js to see how the node-based api is setup, basically
we have 2 endpoints:

 * /streets - Gives you the unique street names with bike racks in the city of vancouver
 * /streets/{street name} - gives you all the addresses of bike racks for the {street name}
 
## Front-end

Pure javascript implementation, using ES6 features like the fetch api to obtain data 
from backend.  No external dependencies.
 
## Run

Clone this repo, then

 * npm install
 * npm start
 * Use latest chrome and navigate to http://localhost:3000
