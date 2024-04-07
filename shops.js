const path = require('path');

exports.controllergetshop = ((req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views' , 'shop.html'))
})