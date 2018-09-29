
sqlite = require('sqlite');

sqlite.open('database.sqlite').then( db => {
	//console.log('database opened', db);
	
	return db.all('SELECT * from TEST');
}).then( res => {
	//console.log(res);
	
	console.log(JSON.stringify(res));
});
