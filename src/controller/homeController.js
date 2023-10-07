import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejs_reactjs'
});

const handleHello = (req, res) => { 
    return res.render("home.ejs")
}
const hendleUser = (req, res) => { 
    return res.render("user.ejs")
}
const handleCreateUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    connection.query(
        'INSERT INTO users (email, password, username) VALUES (?, ?, ?)', [email, password, username],
        function (err, results, fields) {
            if (err) { 
                console.log(err)
            }
        }
    );
    return res.send("handleCreateUser")
}

module.exports = {
    handleHello,
    hendleUser,
    handleCreateUser
}