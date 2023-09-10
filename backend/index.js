// first step is to create a server
const express = require('express');
const app = express();
// intalize the port server
const port = 5001;
const mongoDb = require('./db')
mongoDb();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://mern1-project.vercel.app/");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With , Content-Type , Accept"
    );
    next();
})
app.get("/", (req, res) => {
    res.send("this is the my home page ")
})
app.get("/about", (req, res) => {
    res.send("this is the my about  page ")
})
app.use(express.json());
app.use('/', require('./Routes/Signup'))
app.use('/', require('./Routes/login'))
app.use('/', require('./Routes/Data'))
app.use('/', require('./Routes/OrderData'))
app.use('/', require('./Routes/OrderReview'))
// listen the server on this port
app.listen(port, () => {
    console.log(`port is run on this server ${port}`)
})
