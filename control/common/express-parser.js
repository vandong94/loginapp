const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {cookieParserOption} = require(PATH.CONFIG);

module.exports = {
    bodyParser: bodyParser.urlencoded({
        extended: false
    }),
    cookieParser: cookieParser(cookieParserOption)
}