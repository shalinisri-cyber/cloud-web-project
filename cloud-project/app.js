const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send(`
    <h1>Cloud Computing Project</h1>
    <h2>Status: Running</h2>
    <p>Deployed using Docker</p>
    `);
});

app.listen(3000,()=>{
    console.log("Server started");
});