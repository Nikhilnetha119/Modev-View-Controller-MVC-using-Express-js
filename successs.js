const path = require('path');

exports.controllergetsuccesss = ((req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'success.html'));
})