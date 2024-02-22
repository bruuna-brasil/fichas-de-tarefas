const express = require('express');
const app = express();
const PORT = 3333;

app.use(express.json());

// Rota GET para testar se o servidor está funcionando
app.get('/', (req, res) => {
  res.json({ message: 'Server is up and running' });
});

// Rota POST para testar a recepção e resposta de dados
app.post('/testar-post', (req, res) => {
  const { name, date } = req.body;
  res.json({ name, date, message: 'POST received successfully' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
