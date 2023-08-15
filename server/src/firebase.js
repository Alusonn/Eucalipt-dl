// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://eucalipto-dl-cad6c-default-rtdb.firebaseio.com"
// });

require('dotenv').config()

const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore')

initializeApp({
  credential: applicationDefault()
})

const db = getFirestore()

module.exports = {
  db
}