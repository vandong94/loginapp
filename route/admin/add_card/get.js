module.exports = (req, res) => {
    let message = req.query.message;
    res.render('admin/add_card_type', {message: message});
}