const { DataTypes } = require('sequelize');
const sequelize = require('../Aula7/database');  // Importa a conexão com o banco de dados

// Define o modelo User com os campos 'name', 'email' e 'age'
const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false   // Não permite valores nulos
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true       // Exige que o email seja único
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = User;  // Exporta o modelo para uso em outros arquivos
