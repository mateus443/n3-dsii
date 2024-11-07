const sequelize = require('./database');  // Conexão com o banco de dados
const User = require('../Aula7/user');    // Modelo User

(async () => {
    try {
        await sequelize.sync(); // Sem { force: true } para não recriar a tabela
        console.log("Banco de dados sincronizado!");

        // Inserir um usuário para teste
        const newUser = await User.create({
            name: 'Alice',
            email: 'alice@example.com',
            age: 25
        });
        console.log("Usuário criado:", newUser.toJSON());
    } catch (error) {
        console.error("Erro:", error);
    } finally {
        await sequelize.close();
    }
})();

