const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const router = require('./routes')
const DBConnect = require('./database')
const app = express()

dotenv.config()

const PORT = process.env.PORT || 5500
const corsOption = {
    origin: ['http://localhost:3000']
}

app.use(cors(corsOption))
app.use(express.json())
app.use(router)

DBConnect()

app.get('/', (req, res) => {
    res.status(200).send('<h1>Hi From ClubHouse Backend</h1>')
})

app.listen(PORT, () => {
    console.log(`Server Listening at PORT http://localhost:${PORT}`)
})