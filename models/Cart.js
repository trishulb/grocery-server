const mongoose    =   require("mongoose");
// create instance of Schema
const mongoSchema =   mongoose.Schema;
// create schema
var cartSchema = new mongoSchema({
        "name" : String,
        "type" : String,
        "volume" : String
      });

// create model if not exists.
module.exports = mongoose.model('Cart',cartSchema);