const jwt = require('jsonwebtoken');
require('dotenv').config();


const tokenAuth = (req, res, next) =>{
    try {
        const token = req.headers['access-token'];
        if(!token){
            return res.status(401).json({
                error: "Unauthorized",
                message: "Access token required"
            });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_KEYWORD, {
            algorithms: process.env.JWT_ALGORITHM
        });

        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = tokenAuth;