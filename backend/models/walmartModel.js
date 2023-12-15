const mongoose = require('mongoose');
const Joi = require('joi');

const walmartSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 50
    },
    YourGoods: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 50
    },
    Amount: {
        type: Number,
        required: true,
        
    },
    cards: {
        type: String,
        required: true,
        enum: ['Giftcard', 'Steamcard', 'Vanilacard',]

    },
    product: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    
});


const Walmart = mongoose.model('Walmart', walmartSchema);


function validateWalmart(walmart) {
    const schema = {
        FullName: Joi.string().min(5).required(),
        YourGoods: Joi.string().min(5).required(),
        Amount: Joi.number().required(),
        cards: Joi.string().min(5).required(),
        product: Joi.string().min(5).required(),
    };
    return Joi.validate(walmart, schema);
}
exports.walmartSchema = walmartSchema;
exports.Walmart = Walmart; 
exports.validate = validateWalmart;