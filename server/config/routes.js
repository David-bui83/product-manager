const products = require('./../controllers/products');
const path = require('path');

module.exports = app => {
  app.get('/products',products.getAll);
  app.get('/products/:id',products.getOne);
  app.post('/products',products.new);
  app.put('/products/edit/:id',products.updateOne);
  app.delete('/products/:id',products.destroy);
  app.all('*',(req,res)=>{
    res.sendFile(path.resolve('./public/dist/public/index.html'));
  });
};