const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simulando um banco de dados com uma lista de produtos
let products = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 20 },
    { id: 3, name: 'Product C', price: 30 }
];

// Rota principal para '/'
app.get('/', (req, res) => {
    res.send('Bem-vindo à API! Acesse /products para ver os produtos.');
});

// Endpoint GET /products - Retorna todos os produtos
app.get('/products', (req, res) => {
    res.json(products);
});

// Endpoint POST /products - Cria um novo produto
app.post('/products', (req, res) => {
    const newProduct = { id: products.length + 1, ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Endpoint PUT /products/:id - Atualiza um produto existente
app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex(p => p.id == id);

    if (productIndex === -1) {
        return res.status(404).send('Product not found');
    }

    products[productIndex] = { id: parseInt(id), ...req.body };
    res.json(products[productIndex]);
});

// Endpoint DELETE /products/:id - Remove um produto
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex(p => p.id == id);

    if (productIndex === -1) {
        return res.status(404).send('Product not found');
    }

    products.splice(productIndex, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
