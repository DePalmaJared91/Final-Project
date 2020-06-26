var express = require('express')
const path = require('path');
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = 'mongodb+srv://mermer143:Duchess143!@cluster0-ge9yd.mongodb.net/?retryWrites=true&w=majority'

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.use(express.static(path.join(__dirname, 'client/build')));

var Users = require('./routes/Users')

app.use('/users', Users)


app.listen(port, () => {
  console.log('Server is running on port: ' + port)
})