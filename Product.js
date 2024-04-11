const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.txt');
const messageFilePath = path.join(__dirname, '../data/message.txt');

const getProductsFromFile = (callback) => {
    fs.readFile(productsFilePath, (err, fileContent) => {
        if (err) {
            callback([]);
        } else {
            const products = fileContent.toString().split('\n').filter(product => product.trim() !== '');
            callback(products);
        }
    });
};

const saveProductToFile = (title, callback) => {
    fs.appendFile(productsFilePath, title + '\n', err => {
        if (err) {
            console.error('Error saving product:', err);
        } else {
            console.log('Product saved successfully');
            callback();
        }
    });
};

const saveMessageToFile = (message, callback) => {
    fs.writeFile(messageFilePath, message, err => {
        if (err) {
            console.error('Error saving message:', err);
        } else {
            console.log('Message saved successfully');
            callback();
        }
    });
};

module.exports = {
    getProductsFromFile,
    saveProductToFile,
    saveMessageToFile
};
