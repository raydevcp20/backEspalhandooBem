const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');
const photoRoutes = require('./routes/photo');
const cors = require('cors');

// parse application/json
app.use(express.json());
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//get permisions and disable CORS
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Custom-Header, Authorization');

    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    next();
});

app.use('/auth', authRoutes);
app.use('/auth', postsRoutes);
app.use('/auth', photoRoutes);


app.listen(3000, () =>{
    console.log('Server Conectado.');
});
