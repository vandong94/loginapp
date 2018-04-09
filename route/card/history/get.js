const {card} = require(PATH.CONTROL);

module.exports = (req, res) => {
    let user_id = req.user._id;
    card.findHistoryByUserID(user_id, (err, foundHistory) => {
        res.render("history", {foundHistory: foundHistory});
    });
}