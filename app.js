const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));

app.get('/hello', (req, res) => {
  req.session.hello = 'hello';
  res.send('Hello!');
});

app.get('/getHello', (req, res) => {
  res.send(req.session.hello);
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
