const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const db = {
    read: function(){

    },
    write: function(){

    },
    delete: function(){

    },
}

readFile("db/db.json", "utf8")
.then(data => {
    const db = JSON.parse(data);
    console.log(db);
    db.push("Hello");
    console.log(db);
    return writeFile("db/db.json", JSON.stringify(db));
})
.catch(err => console.log(err));