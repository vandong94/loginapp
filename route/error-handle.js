module.exports = (err, req, res, next) => {
    console.error(err);
    res.status(500);
    res.render('500', {
        url: req.url,
        message: err.message||null
    });
}