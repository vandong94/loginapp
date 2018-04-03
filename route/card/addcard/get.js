module.exports = (req, res) => {
    var message = req.query.message;

    res.render('addcard', {message: message});
}