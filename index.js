const express = require('express');
const cors = require('cors');
const port = 3333;

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(express.json());
app.use(cors());

let message = [
  {
    name: "billy",
    message: "Hey I'm billy"
  }
]

app.get('/message', (req, res) => {
  res.json(message);
});

const server = http.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});