const path = require('path');

exports.controllerpostcontacts = ((req, res,next) => {
    console.log(req.body);
    res.redirect('/success')
})

exports.controllergetcontacts = ((req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact-us.html'));
})