const mongoose    =   require("mongoose");
// create instance of Schema
const mongoSchema =   mongoose.Schema;
// create schema
var groceryItemsSchema = new mongoSchema({
        "items" : Array
      });

// create model if not exists.
module.exports = mongoose.model('GroceryItems',groceryItemsSchema);