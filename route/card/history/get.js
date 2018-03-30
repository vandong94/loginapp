const {card} = require(PATH.CONTROL);

module.exports = (req, res) => {
    let emailUser = req.cookies.email;

    card.findAllHistory(emailUser, (err, data) =>{
        if(err) throw err;
        res.render("history", {history: data});
    })
    
}