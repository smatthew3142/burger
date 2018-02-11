// Import MySQL connection.
var connection = require("../config/connection.js");
// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {

  selectAll: function(table, cb) {

    var queryString = "SELECT * FROM" + table;
    
    connection.query(queryString, function(err, result) {
      
      if (err) throw err;

      cb(result);

    });
  },



  insertOne: function(table, col, tableInput, cb) {
    
    var queryString = "INSERT INTO" + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, [tableInput], function(err, result) {
      
      if (err) throw err;
      
      cb(result);

    });
  },


  update: function(table, col, columnVal, condition, conditionVal, cb) {
      
      var queryString = "UPDATE " + table;

      queryString += " SET ";
      queryString += objToSql(col);
      queryString += " =? ";
      queryString += " WHERE ";
      queryString += condition;
      queryString += " =? ";

      console.log(queryString);

      connection.query(queryString, [conditionVal] function(err, result) {
        
       if (err) throw err;

        cb(result);
        
      });
    }
  };

module.exports = orm;
