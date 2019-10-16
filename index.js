const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 3333;
app.use(express.json());

let message = [
  {
    name: "billy",
    message: "Hey I'm billy"
  }
]

app.get('/', function (req, res) {
  res.json(message);
});

const server = listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});