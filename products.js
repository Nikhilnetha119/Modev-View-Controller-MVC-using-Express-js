// const path = require('path');

// exports.controllergetproduct = ((req, res, next) => {
//     res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
// });

// exports.controllerpostproduct = (( req, res, next) => {
//     console.log(req.body);
//     res.redirect('/shop');
// })

// products.js (Controller)

const path = require('path');
const Product = require('../Model/Product');

exports.controllergetproduct = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
};

exports.controllerpostproduct = (req, res, next) => {
    const productTitle = req.body.title;

    // Save the product data to file
    Product.saveProductToFile(productTitle, () => {
        res.redirect('/shop');
    });
};
