const {MongoClient} = require('mongodb')

MongoClient.connect("mongodb://localhost/carousel", (err, db) => {
  const images = db.collection('images')

  images
  .find({})
  .toArray()
  .then(results => {
    !results.length
    ?images
    .insertMany(
      [
        'https://images.pexels.com/photos/299113/pexels-photo-299113.jpeg?h=350&auto=compress&cs=tinysrgb',
        'https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?h=350&auto=compress&cs=tinysrgb',
        'https://images.pexels.com/photos/304862/pexels-photo-304862.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
      ].map(url => ({
        url: url
      }))
    )
    .then(() => db.close())
    .catch(error => console.error(error))
    : db.close()
  })
  .catch(error => console.error(error))
})
