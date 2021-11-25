const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const indexController = {
  index: (req, res) => {
    const robotsFijos = products.filter(producto => producto.category == 'robot-fijo');
		const robotsMoviles = products.filter(producto => producto.category == 'robot-movil');
    res.render("index", { robotsFijos, robotsMoviles });
  },
};

module.exports = indexController;
