import express from "express"

const app = express();

app.listen(5009, () => {
    console.log("server started");
});

app.get("/", (req, res) => {
    res.status(200).send("test hit");
});