const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    return res.send('<form method="POST" action="/product"><input type="text" name="product-name"><button type="submit">Add</button></form>');
});

router.post('', (req, res) => {
    return res.send(req.body);
})

module.exports = router;
