const express = require('express');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const cors = require('cors');
const mongoose = require('mongoose');
const EmployeeInputs = require('./Models/employeeInputs');  
const config = require('./Config/dev');

const uri = "mongodb+srv://guru:UuH9LM8GdWy170RC@cluster0-4sldr.mongodb.net/test?retryWrites=true&w=majority"


app.use(cors());
app.use(express.json());

app.use('/', require('./Routes/router'));


users = [];
connections = [];

mongoose.connect('mongodb+srv://guru:UuH9LM8GdWy170RC@cluster0-4sldr.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true , useNewUrlParser: true });
console.log('connected');

app.get('/', function(req, res) {
   res.send('index.html');
});


io.sockets.on('connection', function(socket) {
  connections.push(socket);
  console.log('connected : %s sockets connected', connections.length);
  socket.on('send message', async function (data) {
    console.log(data.commentToUser);
    const employeeInputs = new EmployeeInputs({
         
                employeeName: data.employeeName,
                motoStation:data.motoStation,
                bikesAllocated:data.bikesAllocated,
                bikeTypes: data.bikeTypes,
                availableBikes: data.availableBikes,
                petrolLessThan10L: data.petrolLessThan10L,
                petrolGreaterThan10L:data.petrolGreaterThan10L,
                petrolGreaterThan20L: data.petrolGreaterThan20L,
                airPressure: data.airPressure,
                puncturedBikes: data.puncturedBikes,
                commentToUser: data.commentToUser,
                time: data.time
    });
    try{
      let reg = await employeeInputs.save().then();
      console.log(reg);
    }
    catch (err){
      console.log(err);
    }
    EmployeeInputs.find().then(result => {

        io.sockets.emit('new message', {result}); 
      })
      console.log("emitted")
      
  });
});

server.listen(process.env.PORT || 8000);
    
console.log('server ruuning on PORT 8000');   