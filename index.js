const express = require('express')
const reverseImageSearch = require('node-reverse-image-search')
const app = express()
var port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const sendResult = (images) => {
    res.send(images)
  }

  reverseImageSearch(req.query.imageUrl, sendResult)
})

app.listen(port, () => {
  console.log(`Example app listening at port: ${port}`)
})