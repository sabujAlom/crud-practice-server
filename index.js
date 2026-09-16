const express = require('express');
const app = express()
require('dotenv').config()
const port = process.env.PORT
const { MongoClient }= require('mongodb');


const client = new MongoClient(process.env.DB_URI);

 async function connectToMongoDB() {
  try {
    await client.connect();
    const db = client.db("digital-product");


    app.get('/products', async (req, res)=>{
      const cursor = await productsCollection.find();
      const result =await cursor.toArray();
      res.send(result)
    })





    const productsCollection= db.collection("products");


    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}
connectToMongoDB();



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})