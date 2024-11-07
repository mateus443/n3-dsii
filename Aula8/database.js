const { Sequelize } = require('sequelize');

// Conexão com o banco de dados SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',       // Especifica o SQLite como o banco de dados
    storage: './database.sqlite'  // Local onde o banco de dados será salvo
});

module.exports = sequelize;
