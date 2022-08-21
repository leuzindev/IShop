const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

function emailAlreadyExists(req, res, next){
    // const { email } = req.body;
    // const value = prisma.user.findUnique({where: { email: email}})
    // if(value){
    //     console.log('1')
    //     next()
    // }else{
    //     console.log('2')
    //     next()
    // }
}

module.exports = emailAlreadyExists;
    