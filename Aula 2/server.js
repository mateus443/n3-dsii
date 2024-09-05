const express = require('express');
const app = express();

// Servir arquivos estáticos na pasta 'public'
app.use(express.static('public'));

// Rota simples
app.get('/', (req, res) => {
  res.send('Servidor Web Local Rodando');
});

// Definir a porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
