const express = require('express')
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const app = express()
const mongoose = require('mongoose')
const route = require('./route')

app.use(express.json())

app.use(helmet())


// Rate limiting middleware
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 100, // Limit each IP to 100 requests per minute
});

app.use(limiter);


mongoose.connect("mongodb+srv://Rimsha:RimAtlas@cluster0.ij9mujl.mongodb.net/nft", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route)

app.listen(3000, () => {
    console.log('serveer is running on port 3000')
})