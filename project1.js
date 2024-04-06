const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const project = express();

const productroute = require('./route/product');
const shoproute = require('./route/shop');
const contactroute = require('./route/contact');
const successroute  = require('./route/Success');

project.use(bodyParser.urlencoded({extended : false}))

project.use(productroute);
project.use(shoproute);
project.use(contactroute);
project.use(successroute);

project.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

project.listen(3000, () => {
    console.log('Server is running on the port')
});
