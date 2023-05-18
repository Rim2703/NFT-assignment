const express = require('express')
const router = express.Router()
const { createNft, getAllNft, getNftById, updateNft, deleteNft } = require('./controller')
const middleware = require('./middleware/auth')
const jwt = require('jsonwebtoken')


const users = [
    {
        username: 'admin',
        password: 'admin@123'
    }
]

const secretKey = 'NFT-project';


// Login endpoint to obtain JWT token
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find the user by username
    const user = users.find((user) => user.username === username)

    if (!user || user.password !== password) {
        // Invalid username or password
        return res.sendStatus(401)
    }

    // Generate JWT token
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' })

    // Send the token in the response
    res.json({ token })
})


router.post('/nfts', middleware.authenticateToken, createNft)
router.get('/nfts', middleware.authenticateToken, getAllNft)
router.get('/nfts/:id', middleware.authenticateToken, getNftById)
router.put('/nfts/:id', middleware.authenticateToken, updateNft)
router.delete('/nfts/:id', middleware.authenticateToken, deleteNft)

module.exports = router