const jwt = require('jsonwebtoken')

const secretKey = 'NFT-project';

// Authentication middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).send({ status: false, message: "token missing" })
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).send({ status: false, message: "Unauthorise access" })
        }
        req.user = user;
        next()
    })
}

module.exports = { authenticateToken }