const dotenav = require('dotenv').config()

module.exports = {
    port : process.env.PORT ,
    url :process.env.URL ,
    jwtKey : process.env.JWT_KEY
}