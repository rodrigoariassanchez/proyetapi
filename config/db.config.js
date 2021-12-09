const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: "database-1.cd0ithle1pfb.us-east-1.rds.amazonaws.com",
	user: "admin",
	password: "xvP5&$cr0R3o",
	database: "gpds",
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Base de datos conectada');
})

module.exports = dbConn;