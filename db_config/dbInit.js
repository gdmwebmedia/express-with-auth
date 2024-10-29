var admin = require("firebase-admin");

var serviceAccount = require("./tic-2024-2025-firebase-adminsdk-inwg4-20456a3448.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

module.exports = db