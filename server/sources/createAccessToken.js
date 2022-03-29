const sign = require('jsonwebtoken');

const CreateAccessToken = (id, exp, used) => {
    return used ? sign({UserId: id, used}, process.env.SECRET, {expiresIn: exp}) : 
    sign({UserId: id}, process.env.SECRET, {expiresIn: exp});
}

module.exports = CreateAccessToken;