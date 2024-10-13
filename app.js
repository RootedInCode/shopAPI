const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');


app.use('/products' , productRoutes); // anything starting with /products will be forwarded to routesProducts therefore in products.js we just write / and not /products
app.use('/orders' , orderRoutes);
module.exports = app;