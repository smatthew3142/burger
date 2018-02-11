var orm = require("../config/orm.js");

var burger = {

	selectAll: function(cb){

		orm.selectAll("burgers", function(result){

			cb(result);

		});
	},

	insertOne: function(newVal, cb){

		orm.insertOne("burgers", "burger_name", newVal, function(result){

			cb(result);

		});
	},

	updateOne: function(conditionVal, cb){

		orm.updateOne("burgers", "id", conditionVal, function(result){

			cb(result);
		});
	}
};

module.exports = burger;