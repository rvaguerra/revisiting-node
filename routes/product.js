const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/create', (req, res) => {
    return res.sendFile(path.join(__dirname, '..', 'views', 'product', 'product.create.html'));
});

router.post('', (req, res) => {
    return res.send(req.body);
})

module.exports = router;
