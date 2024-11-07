# Projeto de Exemplo com Sequelize e SQLite

Este projeto demonstra o uso do Sequelize como ORM para gerenciar um banco de dados SQLite em um ambiente Node.js. O objetivo é criar uma tabela users e realizar operações CRUD (Create, Read, Update, Delete) usando Sequelize.

### Tecnologias Utilizadas
 - Node.js: Ambiente de execução JavaScript no lado do servidor.
 - Sequelize: ORM (Object-Relational Mapping) para bancos de dados relacionais.
 - SQLite: Banco de dados leve e baseado em arquivo, ideal para desenvolvimento e testes.

### Estrutura do Projeto
``` bash

Aula7/
├── database.js          # Configuração do banco de dados Sequelize com SQLite
├── index.js             # Código principal que sincroniza o banco e executa operações CRUD
├── models/
│   └── User.js          # Modelo Sequelize para a tabela de usuários
├── database.sqlite      # Arquivo do banco de dados SQLite (gerado automaticamente)
└── README.md            # Documentação do projeto

```

### Pré-requisitos
Antes de começar, você precisa ter o Node.js instalado em sua máquina. Download do Node.js

### Instalação e Execução
Siga os passos abaixo para configurar e executar o projeto:

#### Clone o Repositório

```bash
git clone linkRepositorio
cd nome-do-repositorio
```

### Instale as Dependências

No diretório do projeto, execute:

```bash
npm install
```

### Configuração do Banco de Dados

O projeto usa SQLite, então não é necessário configurar um servidor de banco de dados. O arquivo database.sqlite será criado automaticamente no diretório do projeto quando o código for executado pela primeira vez.

### Execute o Projeto

Para sincronizar o banco de dados e executar as operações CRUD, execute o arquivo index.js:

``` bash
node index.js
```

#### Isso irá:

 - Sincronizar o banco de dados e criar a tabela users (se ainda não existir).
 - Inserir um exemplo de usuário na tabela.
 - Exibir os dados da tabela users no console.


### Verificando os Dados no Banco de Dados SQLite

Após executar o código, você pode visualizar o conteúdo do arquivo database.sqlite usando uma das opções abaixo:

 - Opção 1: Usando o Visual Studio Code com Extensão SQLite
    - Instale a extensão SQLite Viewer ou SQLite Explorer no VS Code.
    - No Explorer do VS Code, navegue até o arquivo database.sqlite.
    - Clique com o botão direito no arquivo e selecione Open Database ou Show Table (dependendo da extensão).
     - Você poderá navegar pelas tabelas e visualizar os dados diretamente na interface do VS Code.


 - Opção 2: Usando DB Browser for SQLite
    - Baixe e instale o DB Browser for SQLite.
     - Abra o programa e vá para File > Open Database. 
     - Selecione o arquivo database.sqlite no diretório do projeto. 
     - Navegue até a tabela users para ver os dados.

 - Opção 3: Usando a Linha de Comando SQLite
    - No terminal, navegue até o diretório do projeto onde o arquivo database.sqlite está localizado.

Execute o seguinte comando para abrir o prompt do SQLite:

``` bash
sqlite3 database.sqlite
```

No prompt do SQLite, digite o seguinte comando para ver todos os dados da tabela users:

``` sql
.table 

SELECT * FROM users;
```

Para sair do prompt SQLite, digite .exit.

### Contribuição
Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.