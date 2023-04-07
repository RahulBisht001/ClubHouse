const express = require('express')
const dotenv = require('dotenv')


const router = require('./routes')


const app = express()
dotenv.config()

const PORT = process.env.PORT || 5500
app.use(router)

app.get('/', (req, res) => {

    res.status(200).send('<h1>Hi From ClubHouse Backend</h1>')

})

app.listen(PORT, () => {
    console.log(`Server Listening at PORT http://localhost:${PORT}`)
})