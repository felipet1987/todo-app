const express = require('express');
const app = express();
const connectDb = require('./src/connection');
const cors = require('cors');

app.use(express.urlencoded());
app.use(express.json()); 
app.use(cors());

const AppRoutes = require('./routes')

AppRoutes.forEach(route => {
  app[route.method](route.path, (request, response, next) => {
      route.action(request, response)
          .then(() => 
          next)
          .catch(err => next(err));
  });
});

const PORT = 8080;



app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log('MongoDb connected');
  });
});
