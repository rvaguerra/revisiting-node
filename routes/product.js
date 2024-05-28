const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res) => {
    return res.send('<form method="POST" action="/add-product"><input type="text" name="product-name"><button type="submit">Add</button></form>');
});

router.post('/add-product', (req, res) => {
    return res.send(req.body);
})

module.exports = router;
