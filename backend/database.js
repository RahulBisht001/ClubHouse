const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', true)

const DBConnect = async () => {
    const DB_URL = process.env.DB_URL
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("DataBase Connection established successfully")
    }
    catch (err) {
        console.log('DATABASE ERROR  hai Bhaiya')
        console.log(err.message)
        process.exit()
    }
}
module.exports = DBConnect