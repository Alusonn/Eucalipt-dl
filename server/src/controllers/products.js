import product from "../models/product"

export const getProducts = async (req, res) => {
    const products = await product.find()
    res.json(products)
}

export const createProduct = (req, res) => {

    const { name, description, price } = req.body

    console.log(name, description, price)
    res.json('Recibido')


}

export const updateProduct = (req, res) => res.send("Updating Products")

export const deleteProduct = (req, res) => res.send("Deleting Products")
