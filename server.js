const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;


app.use(cors());

const object = {
    '1st': {
        'name': 'AR-RAHMAAN',
        'meaning': 'The Most or Entirely Merciful'
    },
    '2nd': {
        'name': 'AR-RAHEEM',
        'meaning': 'The Bestower of Mercy'
    },
    '3rd': {
        'name': 'AL-MALIK',
        'meaning': 'The King and Owner of Dominion'
    }
}

const error = {
    'error':'incorrect parameter',
    'resolve': 'example: 1st or 2nd, 3rd.....'
}

// main page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// API Code

// send all names
app.get('/api', (req,res) => {
    res.json(object);
})

// send requested name
app.get('/api/:name', (req,res) => {
    let name = req.params.name.toLowerCase();

    if(object[name]){
        res.json(object[name]);
    }else{
        res.json(error);
    }

    
})

// Listener on port provided by the environment or 3000
app.listen(process.env.PORT || PORT, function() {
    console.log('listening on '+PORT)
})