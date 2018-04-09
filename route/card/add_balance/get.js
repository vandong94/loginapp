module.exports = (req, res) => {

    var message = req.query.message;

    res.render('add_card', {message: message});
}