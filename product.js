const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});

router.post('/',( req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
})

module.exports = router