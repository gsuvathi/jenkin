const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <h1>Blog Application</h1>
        <p>Welcome to my Blog Application!</p>
        <p>Application is running successfully.</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        message: "Blog Application is healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Blog Application running on port ${PORT}`);
});