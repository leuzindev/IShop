const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

class CategoryController {

    static async getAllCategories(req, res){
        try {
            const allCategories = await prisma.category.findMany();
            return res.json(allCategories);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async getCategory(req, res){
        try {
            const { id } = req.params;
            const category = await prisma.category.findUnique({where:{ id: parseInt(id) }});
            return res.json(category);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async getCategoryByName(req, res){
        try {
            const { name } = req.params
            const category = await prisma.category.findMany({where:{ name: name }});
            return res.status(200).json(category);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async createCategory(req, res){
        try {
            const { name, description } = req.body;
            const newCategory = await prisma.category.create({ data: {name, description }});
            return res.status(201).json(newCategory);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async deleteCategory(req, res){
        try {
            const { id } = req.params;
            await prisma.category.delete({
                where: {
                    id: parseInt(id)
                }
            });
            return res.status(200).json("Category has been deleted");
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async updateCategory(req, res){
        try {
            const { id } = req.params;
            const { name, description } = req.body;
            const attCategory = await prisma.category.update({
                where: {
                    id: parseInt(id)
                },
                data:{ name, description }})
                return res.status(204).json(attCategory);
        } catch (error) {
            res.status(200).json("Category has been updated");
        }
    }
}

module.exports = CategoryController;