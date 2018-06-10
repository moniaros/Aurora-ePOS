var express                 = require('express'),
    bodyParser              = require('body-parser'),
    mongoose                = require('mongoose'),
    path                    = require('path')

const LOCALCONF             = require('./local_conf.js')

var app = express()

mongoose.Promise = global.Promise

// COPY SETTINGS
const PORT = process.env.PORT || LOCALCONF.PORT
const MONGODB = LOCALCONF.MONGODB

// CUSTOM SETTINGS
mongoose.connect(MONGODB)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client')))



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/index.html'))
})

app.listen(PORT, function(){
    console.log('Server is running')
})
