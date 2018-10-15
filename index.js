const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require ('method-override');

require('./db/db');

const port = 3001;


const catroller = require('./controllers/catroller');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


app.use('/cats', catroller);

app.get('/', (req, res) => {
  res.send('This is cats app')
});


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
