const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {

    const studentName = req.body.name;
    const studentEmail = req.body.email;

    res.render("index", {
        pageTitle: "Cognifyz Full Stack Internship",
        taskName: "Task 1-Form Submission",
        message: `Thank you, ${studentName}! We have received your email: ${studentEmail} successfully!`
    });

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});