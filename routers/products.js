const express = require('express');
const Contenedor = require('../Contenedor');

const routerProducts = express.Router();

const productsContenedor = new Contenedor('./data/products.json');

routerProducts.post('/', async (req, res) => {
    const newProduct = req.body;
    if(newProduct.title === '' || newProduct.price === '' || newProduct.thumbnail === ''){
        res.render('./pages/products-list.ejs', {
            nuevo: newProduct
        });
    } else {
        await productsContenedor.save(newProduct);
        res.redirect('/productos/list-productos');
    }
});

routerProducts.get('/list-productos', async (req, res) => {
    const newProduct = req.body;
    const products = await productsContenedor.getAll();
    res.render('./pages/products-list.ejs', {
        productos: products,
        nuevo: newProduct
    });
});

module.exports = routerProducts;