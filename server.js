const express = require("express");
const Cart = require("./models/Cart");
const GroceryItems = require("./models/groceryItems");
const bodyParser = require('body-parser');
const db = require("./dbconnection/mongoclient");

const app = express();
const port = 8089;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.get('/health', function (req, res) {
    return res.send({status:'UP'});
});

app.post('/grocery', function (req, res) {
    console.log("req.body  ",req.body);
    console.log(JSON.stringify(req.headers));
        const grocery = new GroceryItems(req.body);

    grocery.save((err, question) => {
           if (err) return res.json({"error":error});
           res.status(201);
           res.json(question);
         });

});

app.get('/grocery', function (req, res) {
    // console.log(req);
    // const cart = new Cart(req.body);
    console.log(JSON.stringify(req.headers));

    GroceryItems.find({},function(err,items){
         if(err) throw err;
         else{
           return res.send(items);
         }
       });    
 });

app.post('/cart', function (req, res) {
     console.log("req.body  ",req.body);
     console.log(JSON.stringify(req.headers));

     const cart = new Cart(req.body);

        cart.save((err, question) => {
            if (err) return res.json({"error":error});
            res.status(201);
            res.json(question);
          });

});

app.get('/cart', function (req, res) {
   // console.log(req);
   // const cart = new Cart(req.body);
    Cart.find({},function(err,items){
        if(err) throw err;
        else{
          return res.send(items);
        }
      });    
});

app.post('/Users',function (req,res) {

});





app.listen(port,() => console.log('Example app listening on port '+ port));