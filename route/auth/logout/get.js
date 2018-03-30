module.exports = (req, res) => {
    res.clearCookie('email');
    return res.status(200).redirect('/auth/login');
}