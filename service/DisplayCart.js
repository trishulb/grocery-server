

module.exports = function() {
  console.log("cart items ");
   
        // Implement the middleware function based on the options object
        const cart = new cart(req.body);

        cart.save((err, question) => {
            if (err) return res.json({"error":error});
            res.status(201);
            res.json(question);
          });

};