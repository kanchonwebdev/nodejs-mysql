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

    var sql = "insert into posts (title, body) values ('title one','post body')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('data insert');
        console.log(result.insertId)
    })
});
