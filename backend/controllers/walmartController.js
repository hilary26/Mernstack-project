// const Walmart = require('../models/walmartModel');
const { Walmart, validate} = require('../models/walmartModel');
// const bcrypt = require('bcrypt');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
// const jwt = require('jsonwebtoken');


exports.getWalmartById =  catchAsync(async (req, res) => {
    const walmart = await Walmart.findById(req.params.id);

    if (!walmart) return res.status(404).send('The walmart with the given ID was not found');
    
    res.send(walmart);
});




exports.getAllWalmart = catchAsync(async (req, res)=> {
    const walmart = await Walmart.find().sort("FullName");
    res.send(walmart);

});
exports.createWalmart = catchAsync(async (req, res)=> {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
  
    let walmart = new Walmart ({
        FullName: req.body.FullName,
        YourGoods: req.body.YourGoods,
        Amount: req.body.Amount,
        cards: req.body.cards,
        product: req.body.product
    });
    walmart = await walmart.save();

    res.send(walmart);
});

    exports.updateWalmart = catchAsync(async(req, res) => {
        const { error } = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
    
        const walmart = await Walmart.findByIdAndUpdate(req.params.id, {
             FullName: req.body.FullName,   
             YourGoods: req.body.YourGoods, 
             Amount: req.body.Amount,
             cards: req.body.cards,
             product: req.body.product

            },
             {
                new: true
            });

            if (!walmart) return res.status(404).send('The walmart with the given ID was not found');
            
            res.send(walmart);
    
    });
    exports.deleteWalmart = catchAsync(async(req, res) => {
        const walmart = await Walmart.findByIdAndDelete(req.params.id);
        if (!walmart) return res.status(404).send("The walmart with the ID was not found");
    
        res.send(walmart);
    
});

