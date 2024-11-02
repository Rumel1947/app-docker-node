const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = "mongodb://db:27017";

app.get("/", async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    res.send("Conectado a MongoDB!");
    client.close();
  } catch (error) {
    res.status(500).send("Error al conectar a MongoDB");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
