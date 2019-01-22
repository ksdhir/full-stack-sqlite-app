
let express = require('express');
let app = express();

let sqlite = require('sqlite');


function setupServer(db) {

    // This is a test frontend - uncomment to check it out
    // app.use(express.static('public'));
        
    app.get('/info', (req, res) => {
        res.send('Full stack example');
    });

    // retrieve all unique stree names
    app.get('/streets', (req, res) => {
        db.all(`SELECT DISTINCT(name) FROM BikeRackData`)
          .then( data => {
              console.log(data);
              res.send(data);
          });
    });

    app.get('/streets/:street/', (req, res) => {
        let streetName = req.params.street;
        // query based on street
        db.all(`SELECT * FROM BikeRackData WHERE name = '${streetName}'`)
          .then( data => {
              res.send(data);              
          });
        

    });

    

    let server = app.listen(8080, () => {
        console.log('Server ready', server.address().port);
    });
    
}

sqlite.open('database.sqlite').then( db => {
	//console.log('database opened', db);

    setupServer(db);
    //return db.all('SELECT * from TEST');
    
})

