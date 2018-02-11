var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){

	var burgerInfo = {

		burgerType: [],

		burgerItem: []
	};

	burger.selectAll(function(data){

		for(var i = 0; i < data.length; i++){

			burgerInfo.burgerType.push(data[i]);
		}

		res.render("index", burgerInfo);
	});
});

router.post("/insert", function(req, res){

	burger.insertOne([req.body.tableInput], function(){

		res.redirect("/");
	});
});

router.post("/update/:id", function(req, res){

	burger.updateOne([req.body.devoured], [req.params.id] function(){

		res.redirect("/");
	});
});

module.exports = router;