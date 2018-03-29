const {common, card} = require(PATH.CONTROL);

const callbackStyle = (req, res, next) => {

    let {valuecard} = req.body.buy;

    let namecard = "";

    if(valuecard == 10){
        namecard = "Mệnh giá 10.000";
    }else if(valuecard == 20){
        namecard = "Mệnh giá 20.000"
    }else {
        namecard = "Mệnh giá 30.000";
    }

    let balanceremain = 100 - req.body.buy;

    let emailuser = "dong@gmail.com";

    console.log("valueCard: ", valuecard);
    console.log("nameCard: ", namecard);
    console.log("RemainBal: ", balanceremain);
    console.log("EmailUser: ", emailuser);



    card.createNewHistory({
        emailuser,
        namecard,
        valuecard,
        balanceremain
    },(err, newHistory) => {
        if(err) return next();
        res.json({
            success: true,
            history_id: newHistory._id
        });
    });
}
module.exports = [
    common.expressParser.bodyParser,
    callbackStyle
]