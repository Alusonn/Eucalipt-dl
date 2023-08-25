// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://eucalipto-dl-cad6c-default-rtdb.firebaseio.com"
// });

require('dotenv').config()

// Importaciones necesarias de base de datos

const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore')


// Busca automaticamente el credential de Google

initializeApp({
  credential: applicationDefault()
})

// Conexion a base de datos

const db = getFirestore()

module.exports = {
  db
}