const mongoose    =   require("mongoose");
mongoose.connect('mongodb://'+process.env.MONGO_HOST+':27017/grocerydb', { useNewUrlParser: true }).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});