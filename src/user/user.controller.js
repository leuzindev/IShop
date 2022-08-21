const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const generateHashPassword = require('./tools/hashFunction')

class UserController {

    static async getAllUsers(req, res){
    try {
        const allUsers = await prisma.user.findMany();
        return res.json(allUsers);
    } catch (error) {
        res.status(500).json(error.message);
    }
    }

    static async getUser(req, res){
        try {
            const { id } = req.params
            const user = await prisma.user.findUnique({where:{ id: parseInt(id) }});
            return res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async getUserByName(req, res){
        try {
            const { name } = req.params
            const user = await prisma.user.findMany({where:{ name: name }});
            return res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async createUser(req, res){
        try {
            const { name, email } = req.body;
            const password = generateHashPassword(req.body.password);
            const newUser = await prisma.user.create({data: {name, email, password}});
            return res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async deleteUser(req, res){
        try {
            const { id } = req.params;
            await prisma.user.delete({where: { id: parseInt(id) }})
            res.status(200).json({msg: "User has been deleted"})
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async updateUser(req, res){
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            const password = generateHashPassword(req.body.password);
            const attUser = await prisma.user.update({
                 where: { 
                    id: parseInt(id)
                }, 
            data: { name, email, password }});
            res.status(204).json(attUser);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

}

module.exports = UserController;


