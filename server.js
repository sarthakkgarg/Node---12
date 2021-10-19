require('./db/conn')
const User = require('./model/schema')
const express = require('express');
const app = express()
const cors = require('cors');

app.use(express.json());
app.use(cors())

app.post('/', async (req, res) => {
    let requestData = {};
    let selectionKeys = {};
    let sortingKey = req.body.sortingKey ;
    let offset = req.body.skip;
    let limit = req.body.limit;
    let search = req.body.search;
    console.log(req.body)
    const response = await User.find({ $or : [{ first_name: {$regex: search, $options: "i" }}, {gender: {$regex: search, $options: "i" }}, {city: {$regex: search, $options: "i" }}, {company: {$regex: search, $options: "i" }}] } , 
    requestData, selectionKeys).sort(sortingKey).skip(parseInt(offset)).limit(parseInt(limit)).exec(); 
    console.log(response)
    res.send(response)
})

app.listen(3000, () => console.log("Running"))

