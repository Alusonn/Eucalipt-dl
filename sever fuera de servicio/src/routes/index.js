const { Router } = require("express");

const router = Router();

const { db } = require("../firebase");

// Recibe los productos de la Base de datos

router.get("/", async (req, res) => {
  const querySnapshot = await db.collection("Productos").get();

  const products = querySnapshot.docs.map((doc) => ({
    // Forma para traer el id del producto, que es el ID que le crea google en Firebase
    id: doc.id,

    // Forma para traer solo una cosa
    titulo: doc.data().titulo,

    // Forma para traer todos los datos de la base de datos
    ...doc.data(),
  }));

  // res.json({
  //   ok: true,
  //   msg: "Productos desde DB",
  //   productos,
  // });

  res.render("index", { products });
});

//  Se manda solicitud para crear producto nuevo

router.post("/new-product", async (req, res) => {
  // Constante para leer el formulario
  const { title, desc, type, price, sku, size } = req.body;

  const selectedSizes = req.body.sizes;

  // Añadiendo productos a la base de datos
  await db.collection("Productos").add({
    title,
    desc,
    type,
    price,
    sku,
    selectedSizes,
  });

  const newProduct = { title, desc, type, price, sku, size, selectedSizes };

  // res.status(201).json({
  //   ok: true,
  //   message: "Nuevo producto creado",
  //   newProduct,
  // });

  res.redirect("/");
});

// Se manda solicitud para solicitar id del producto y editarlo posteriormente en el /update-product post

router.get("/edit-product/:id", async (req, res) => {
  const doc = await db.collection("Productos").doc(req.params.id).get();

  // console.log({ id: doc.id, ...doc.data() });

  // res.json({
  //   ok: true,
  //   msg: "producto editado",
  // });

  res.render("index", { product: { id: doc.id, ...doc.data() } });
});

// Se manda solicitud y se elimina producto

router.get("/delete-product/:id", async (req, res) => {
  await db.collection("Productos").doc(req.params.id).delete();

  // res.json({
  //   ok: true,
  //   msg: "Contacto eliminado",
  // });

  res.redirect("/");
});

// Se manda la solicitud desde el front end y se actualiza

router.post("/update-product/:id", async (req, res) => {
  const { id } = req.params;

  db.collection("Productos").doc(id).update(req.body);

  // res.json({
  //   ok: true,
  //   msg: "Producto actualizado correctamente",
  // });

  res.redirect("/");
});

module.exports = router;
