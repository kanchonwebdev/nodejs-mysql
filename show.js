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

    var sql = "select * from posts";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('data show');
        console.log(result)
    })
});
