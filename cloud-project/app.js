const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send(`
    <h1>Cloud Computing Project</h1>
    <h2>Status: Running</h2>
    <p>Deployed using Docker</p>
    `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
});