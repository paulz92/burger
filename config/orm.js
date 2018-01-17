// require the mysql connection export
var connection = require("./connection.js");

// create orm object with three methods for selecting all data, inserting new data,
// and updating data within database
var orm = {
	selectAll: function() {

	},
	insertOne: function() {

	},
	updateOne: function() {

	}
};

// export the orm for use in the burger.js model
module.exports = orm;