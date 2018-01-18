// require mysql npm package
var mysql = require("mysql");

// enter credentials for mysql connection
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "burger_db"
});

// connect to database, throw error if error, otherwise log the connection id
connection.connect(function(err) {
	if (err) {
		console.error("error connecting to database: " + err.stack);
		return;
	}
	console.log("connected to database as id " + connection.threadId);
});

// export connection for use in orm
module.exports = connection;