const express = require('express')

const app = express()

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Pass to next layer of middleware
    next();
});

app.set('port', process.env.PORT || 3001)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.get('/api/orders', (req, res) => {
  res.json({
    orders: [
      {
        id: 1,
        items: 10,
        value: 200,
      },
      {
        id: 2,
        items: 10,
        value: 200,
      },
      {
        id: 3,
        items: 10,
        value: 200,
      },
      {
        id: 4,
        items: 10,
        value: 200,
      },
    ]
  })
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})
