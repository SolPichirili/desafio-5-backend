const express = require('express');
const routerForm = express.Router();

routerForm.get('/', (req, res)=>{
    res.render('./pages/form.ejs')
});

module.exports = routerForm;