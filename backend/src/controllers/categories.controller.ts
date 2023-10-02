import prisma from "../../prisma/prismaClient";


export const getAllCategories = async (req, res) => {
    try {
        const allCategories = await prisma.category.findMany({
            where: {
                author: {
                    id: req.user.id
                }
            }
        })
        res.json(allCategories);
    } catch (e) {
        console.log(e, ' is the error')
    }
}