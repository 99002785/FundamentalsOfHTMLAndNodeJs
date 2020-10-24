const app = require("express")();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Views/index.html");
})

app.listen(1235, () => {
    console.log("Client App running at 1235");
})