const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productdb', { useNewUrlParser: true })
    .catch(err => console.log(err));

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Product Title must exist'],
        minlength: [4, 'Product title is at least 4 letters']
    },
    price: {
        type: Number,
        required: [true, 'Product must have a price'],
        min: [0, 'Product\'s price has to be greatter then 0']
    },
    url:String,
}, { versionKey: false }, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);