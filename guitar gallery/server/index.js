var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var db = require('../database-mysql');
const { fn, Callbacks } = require('jquery');
// var items = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())


app.get('/items', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.post('/postguitar',function (req,res) {
  db.postguitar([req.body.model,req.body.imageUrl,req.body.year,req.body.likes],(err,result)=>{
     err ? console.log(err) : res.status(201).json(result)
  })
})
app.patch('/likesupdate/:id',(req,res)=>{
  db.updatelike([req.params.id,req.body.likes],(err,result)=>{
    err ? console.log(err,'errrrrr') : res.status(201).json(result)

  })
})
app.patch('/likesdelete/:id',(req,res)=>{
  db.updatedeletelike([req.params.id,req.body.likes],(err,result)=>{
    err ? console.log(err,'errrrrr') : res.status(201).json(result)

  })
})
app.delete("/deleteitems/:id",(req,res)=>{
  db.deleteitem([req.params.id],(err,results)=>{
    err ? console.log(err,'errrrrrr') : res.json("target deleted")
  })
})
app.listen(4000, function() {
  console.log('listening on port 4000!');
});

