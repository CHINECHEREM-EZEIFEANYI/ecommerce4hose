const express = require('express')
const app = express()
const port = process.env.PORT || 8000;


app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});



app.listen(port, () => {
    console.log(`app running on port ${port}`);
});

