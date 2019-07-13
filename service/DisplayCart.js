

module.exports = function() {
  console.log("cart items ");
   
        // Implement the middleware function based on the options object
        const cart = new cart(req.body);

        cart.save((err, question) => {
            if (err) return res.json({"error":error});
            res.status(201);
            res.json(question);
          });
   
         

        // return  { items:[{
        //       id:1,
        //       name :'Sunflower Oils',
        //       type : 'Weight',
        //       volume : '1 kg'
        //     },
        //      {
        //      id:2,
        //      name : 'Eggs',
        //      type : 'Quentity',
        //      volume : '5'
        //    }
        //    ]
        //  }
};