require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors')
const bodyParser = require("body-parser");
const reservationRouter = require('./routes/reservation')
const registerRouter = require('./routes/register')
const loginRouter = require('./routes/login');
const port = 8080

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to the Database'))

app.use(cors())

app.use(express.json())

app.use(bodyParser.json());

app.use('/reservation', reservationRouter)

app.use('/register',registerRouter)

app.use('/login',loginRouter)


app.listen(port, () => console.log(`Backend server running at http://localhost:${port}`));
