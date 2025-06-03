import app from './app.js';

import dotenv from 'dotenv';
import sequelize from './config/database.js';
import User from './models/User.js';

dotenv.config();

sequelize.sync().then(() => {
  console.log('Banco sincronizado.');
});

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const novo = await User.create({ name, email });
  res.json(novo);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
