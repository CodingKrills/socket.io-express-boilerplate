var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


app.set('view engine', 'ejs')

// API
app.get('/', (req, res) => {
  res.render('index')
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});