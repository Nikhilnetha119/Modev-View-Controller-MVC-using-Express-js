const path = require('path');

exports.controllergetproduct = ((req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});

exports.controllerpostproduct = (( req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
})