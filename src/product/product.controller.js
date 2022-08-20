const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

class ProductController {

    static async getAllProducts(req, res){
    try {
        const allProducts = await prisma.product.findMany();
        return res.json(allProducts);
    } catch (error) {
        res.status(500).json(error.message);
    }
    }

    static async getProduct(req, res){
        try {
            const { id } = req.params
            const product = await prisma.product.findUnique({where:{ id: parseInt(id) }});
            return res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async getProductByName(req, res){
        try {
            const { name } = req.params
            const product = await prisma.product.findMany({where:{ name: name }});
            return res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async createProduct(req, res){
        try {
            const { name, description, price } = req.body;
            const newProduct = await prisma.product.create({data: {name, description, price}});
            return res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async deleteProduct(req, res){
        try {
            const { id } = req.params;
            await prisma.product.delete({where: { id: parseInt(id) }})
            res.status(200).json({msg: "Produtc has been deleted"})
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async updateProduto(req, res){
        try {
            const { id } = req.params;
            const { name, description, price } = req.body;
            const attProduct = await prisma.product.update({
                 where: { 
                    id: parseInt(id)
                }, 
            data: { name, description, price }});
            res.status(204).json(attProduct);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = ProductController;


