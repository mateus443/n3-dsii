# Projeto Web - Aula 3

## Descrição do Projeto

Este projeto consiste em um servidor web simples criado com Node.js e Express. O objetivo do projeto é desenvolver uma aplicação web básica, utilizando interatividade e novas funcionalidades através de JavaScript e IA, ampliando o projeto com novas interações e funcionalidades.

### Novas Funcionalidades Adicionadas

1. **Servidor Web com Express**: Implementação de um servidor web utilizando Express.js, que serve arquivos estáticos da pasta `public` e responde a requisições para a página principal com o arquivo `index.html`.
2. **Interatividade Básica**: A aplicação web agora permite interação básica com o usuário, gerenciando requisições HTTP e exibindo respostas dinâmicas no navegador.
3. **Inclusão de IA no Projeto**: A IA foi utilizada para gerar códigos, otimizar interações e aplicar funcionalidades que melhoraram a experiência do usuário e a usabilidade do sistema.

## Prompts Usados e Explicações

Durante o desenvolvimento do projeto, utilizamos a IA para gerar as configurações e códigos de diferentes partes do sistema. Abaixo estão os prompts utilizados e uma breve explicação de cada um:

1. **Prompt para ajustar o `server.js`**:  
   *Objetivo*: Gerar um código de servidor Express que serve arquivos estáticos e responde com `index.html`.
   *Explicação*: Esse prompt foi usado para criar a base do servidor web, utilizando as boas práticas de organização de código no Express.
   
   **Código gerado**:

   ```javascript
   const express = require('express');
   const path = require('path');

   const app = express();
   const PORT = process.env.PORT || 3000;

   app.use(express.static(path.join(__dirname, 'public')));

   app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname, 'index.html'));
   });

   app.listen(PORT, () => {
       console.log(`Servidor rodando em http://localhost:${PORT}`);
   });
Prompt para gerar o package.json:
Objetivo: Criar um arquivo package.json básico com a dependência do Express. Explicação: Esse prompt foi utilizado para criar a estrutura inicial do package.json com a dependência do Express.

Código gerado:

json
Copiar código
{
  "dependencies": {
    "express": "^4.21.0"
  }
}
Capturas de Tela
Aqui estão algumas capturas de tela do site com as novas funcionalidades implementadas:

Figura 1: Página inicial do projeto.

Figura 2: Servidor em execução no terminal.

Como Rodar o Projeto
Clone o repositório:

bash
Copiar código
git clone <URL_DO_REPOSITÓRIO>
Navegue até a pasta do projeto:

bash
Copiar código
cd projetoWeb
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor:

bash
Copiar código
npm start
Acesse a aplicação no navegador em http://localhost:3000.

Licença
Este projeto está licenciado sob a MIT License.

markdown
Copiar código

### Explicações:

- **Novas Funcionalidades Adicionadas**: Aqui, você descreve as funcionalidades implementadas no seu projeto (como o servidor Express, interatividade e uso de IA).
- **Lista de Prompts Usados e Explicações**: Fornece uma lista detalhada dos prompts utilizados para gerar o código, explicando o propósito e o código gerado.
- **Capturas de Tela**: Você deve substituir `./screenshots/homepage.png` e `./screenshots/server.png` pelos caminhos reais das imagens. Para adicionar imagens ao seu repositório, você pode criar uma pasta chamada `screenshots` e adicionar as imagens lá.

### Como adicionar capturas de tela:

1. Crie uma pasta chamada `screenshots` no seu projeto.
2. Coloque as imagens lá.
3. Use a sintaxe `![Descrição da Imagem](caminho/para/imagem)` no Markdown para exibi-las.







