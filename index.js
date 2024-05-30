var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blog",
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "create table posts (title varchar(240), body varchar(240))";
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log('table created');
    })
});
