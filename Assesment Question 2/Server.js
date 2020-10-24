const app = require('express')();
const parser = require("body-parser");
const fs = require("fs");
const dir = __dirname;


app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());


let Users = [];
let flag = 1;

function readData() {
    const filename = "Data/data.json";
    const jsonContent = fs.readFileSync(filename, 'utf-8');
    Users = JSON.parse(jsonContent);
}

function saveData() {
    const filename = "Data/data.json";
    const jsonData = JSON.stringify(Users);
    fs.writeFileSync(filename, jsonData, 'utf-8');
}
app.get("/Users", (req, res) => {
    readData();
    res.send(JSON.stringify(Users));
})

app.get("/Users/:id", (req, res) => {
    const userid = req.params.id;
    if (Users.length == 0) {
        readData();
    }
    let foundRec = Users.find((e) => e.userId == userid);
    if (foundRec == null)
        throw "User not found";
    res.send(JSON.stringify(foundRec))
})

app.put("/Users", (req, res) => {
    if (Users.length == 0)
        readData();
    let body = req.body;

    for (let index = 0; index < Users.length; index++) {
        let element = Users[index];
        if (element.userId == body.userId) {
            element.userName = body.userName;
            element.userAddress = body.userAddress;
            element.userSalary = body.userSalary;
            saveData();
            res.send("User updated successfully");
        }
    }

})

app.post('/Users', (req, res) => {
    if (Users.length == 0)
        readData();
    let body = req.body;



    for (let index = 0; index < Users.length; index++) {
        let element = Users[index];
        if (element.userName == body.userName) {
            res.send("User name already exists");
            flag = 0;
        }

    }


    if (flag >= 1) {
        Users.push(body);
        saveData();
        res.send("User added successfully");
    }

})


app.delete("/Users/:id", (req, res) => {


})

app.listen(1234, () => {
    console.log("Server available at 1234");
})