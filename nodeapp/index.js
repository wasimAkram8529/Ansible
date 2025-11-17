const express = require('express')

const app = express();

app.get('/home', (req, res) => {
  res.json({
    message: "Home page"
  })
})

app.get('/about', (req, res) => {
  res.json({
    message: "About page"
  })
})

// app.get('*', (req, res) => {
//   res.json({
//     message: "Invalid URL"
//   })
// })


app.listen(5000, () => {
  console.log('Server is listening on port 5000')
})