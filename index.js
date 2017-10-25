const express = require('express')
const {MongoClient} = require('mongodb')
const path = require('path')
const publicPath = path.join(__dirname, 'public')
const app = express()

app.use(express.static(publicPath))
MongoClient.connect("mongodb://localhost/carousel", (err, db) => {
  const images = db.collection('images')

app.get('/image', (req,res) => {
  images
  .find({})
  .toArray()
  .then(results => {
    res.send(results)
  })
  .catch(err => console.log(err))
})
app.listen(3000, () => console.log('listening on port 3000.'))
})
