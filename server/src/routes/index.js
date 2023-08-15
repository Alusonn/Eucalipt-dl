const { Router } = require("express");

const router = Router();

const { db } = require("../firebase");

// Recibe los productos de la Base de datos

router.get("/products", async (req, res) => {
  const querySnapshot = await db.collection("Productos").get();

  const productos = querySnapshot.docs.map((doc) => ({

    // Forma para traer el id del producto, que es el ID que le crea google en Firebase
    id: doc.id,

    // Forma para traer solo una cosa
    titulo: doc.data().titulo,

    // Forma para traer todos los datos de la base de datos
    ...doc.data(),
  }));

  res.json({
    ok: true,
    msg: "Productos desde DB",
    productos,
  });
});

//  Se manda solicitud para crear producto nuevo

router.post("/new-product", async(req, res) => {
  // Constante para leer el formulario
  const { title, desc, type, price, sku } = req.body;

  // Añadiendo productos a la base de datos
  await db.collection("Productos").add({
    title,
    desc,
    type,
    price,
    sku,
  });


  const newProduct = ({title, desc, type, price, sku});

  res.status(201).json({
    ok: true,
    message: "Nuevo producto creado",
    
    newProduct,
  });
});

router.get("/edit-product/:id", async(req, res) => {

  const doc = await db.collection('Productos').doc(req.params.id).get()

  console.log({ id: doc.id, ...doc.data()})

  res.json({
    ok: true,
  
    msg:"producto editado",


  })

})


router.get("/delete-product/:id", async(req, res) => {

  await db.collection('Productos').doc(req.params.id).delete()

  res.json({
    ok: true,
    msg: "Contacto eliminado"
  })


})

module.exports = router;
