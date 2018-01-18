// require orm
var orm = require("../config/orm.js");

// create code here that will call orm functions using burger specific input for the
// orm
var burger = {
	selectAll: function(cb) {
		orm.selectAll(function(results) {
			cb(results);
		});
	},
	insertOne: function(name, cb) {
		orm.insertOne(name, cb);
	},
	updateOne: function(id, cb) {
		orm.updateOne(id, cb);
	}
};

// export for use in the controller file
module.exports = burger;