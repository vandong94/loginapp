module.exports = (req, res) => {
    var getMessage = req.query.message;
    res.render('login', {mess: getMessage});
}