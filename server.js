const express = require('express');
const routerForm = require('./routers/form');
const routerProducts = require('./routers/products');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/productos', routerProducts);
server.use('/form', routerForm);

server.set('view engine', 'ejs');

const port = 8080;

server.get('/', (req, res) => {
    res.json({ mensaje: 'Web Funcionando' });
});

const app = server.listen(port, ()=>{
    console.log(`Server corriendo en ${port}`);
});

app.on('error', (error)=>{
    console.log(`Error: ${error}`);
});