const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://m001-student:m001-mongodb-basic@sandbox.xvuef.mongodb.net/covid?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("covid").collection("provinsi");

  // api get data
  collection.find().toArray(function (err, result) {
    if (err) throw err
    app.get('/covid', (req, res) => res.send(result))
  })
  
  client.close();
});
app.use(cors())

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))