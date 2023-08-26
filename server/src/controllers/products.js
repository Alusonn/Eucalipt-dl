import { unlink } from "fs-extra";
import { deleteImage, uploadImage } from "../middlewares/cloudinary";
import Product from "../models/product";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({
        message: "Producto no existe",
      });

    return res.json(product);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, type, price, sku, sizes } = req.body;


    const product = new Product({
      name,
      description,
      type,
      price,
      sku,
      sizes,
    });

    if(req.files?.image) {
      const { public_id, secure_url } = await uploadImage( req.files.image.tempFilePath )
      product.image = {
        public_id,
        secure_url
      }

      await unlink(req.files.image.tempFilePath)
    }

    await product.save();

    res.json(product);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product)
      return res.status(404).json({
        message: "Producto no se puede eliminar porque no existe",
      });

      await deleteImage(product.image.public_id)
      await unlink(req.files.image.tempFilePath)


    return res.json(product);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const productUpdated = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.json(productUpdated);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
