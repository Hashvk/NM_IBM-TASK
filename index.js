const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

const bookRoutes = require('./routes/bookRoutes');
app.use('/books',bookRoutes);

app.get("/", (req, res) => {
    res.send("Library Management API is running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});