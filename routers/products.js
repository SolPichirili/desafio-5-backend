const express = require('express');
const Contenedor = require('../Contenedor');

const routerProducts = express.Router();

const productsContenedor = new Contenedor('./data/products.json');

routerProducts.post('/', async (req, res) => {
    const newProduct = req.body;
    if (newProduct.title !== '' || newProduct.price !== '' || newProduct.thumbnail !== '') {
        await productsContenedor.save(newProduct);
        res.redirect('/productos/list-productos');
    }
});

routerProducts.get('/list-productos', async (req, res) => {
    const products = await productsContenedor.getAll();
    res.render('./pages/products-list.ejs', {
        productos: products
    });
});

module.exports = routerProducts;