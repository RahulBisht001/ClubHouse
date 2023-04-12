const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')


const router = require('./routes')
const DBConnect = require('./database')
const app = express()

dotenv.config()

const PORT = process.env.PORT || 5500
const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000']
}

app.use(cookieParser())
app.use(cors(corsOption))
app.use(express.json({ limit: '10mb' }))
app.use(router)
app.use('/storage', express.static(path.join(__dirname, 'storage')))


DBConnect()

app.get('/', (req, res) => {
    res.status(200).send('<h1>Hi From ClubHouse Backend</h1>')
})

app.listen(PORT, () => {
    console.log(`Server Listening at PORT http://localhost:${PORT}`)
})