# AlunoAPI
Criação de uma API para a atividade Alunos de DEV WEB 3 da FATEC

Aluno: João Victor Quaresma de Arruda

📚 API de Alunos

Este projeto é uma API REST simples desenvolvida em Node.js + Express, que simula o gerenciamento de alunos e seus cursos.
Permite listar, cadastrar, atualizar e excluir alunos, além de adicionar cursos a um aluno específico.

⚙️ Tecnologias utilizadas

Node.js

Express 

📦 Como rodar o projeto
1. Clonar o repositório
git clone https://github.com/seu-usuario/alunoapi.git
cd alunoapi

2. Instalar dependências
npm install
npm install express

4. Rodar o servidor
node app.js


Servidor disponível em:
👉 http://localhost:3000

📌 Endpoints disponíveis

🔹 Listar todos os alunos

GET /
Retorna a lista de alunos.

🔹 Adicionar novo aluno

POST /alunos
Body (JSON):

{
  "ra": 6,
  "nome": "Mariana",
  "turma": "ADS",
  "cursos": ["Java", "Spring Boot"]
}

🔹 Adicionar curso a um aluno

POST /alunos/:ra/cursos
Body (JSON):

{
  "curso": "Angular"
}

🔹 Atualizar aluno

PUT /alunos/:ra
Body (JSON):

{
  "nome": "João Silva",
  "turma": "DSM",
  "cursos": ["Python", "Django"]
}

🔹 Remover aluno

DELETE /alunos/:ra

{
  "nome": "João Silva",
  "turma": "DSM",
  "cursos": ["Python", "Django"]
}

🧪 Testando com Postman

Abra o Postman e crie uma nova collection chamada AlunoAPI.

Adicione as requisições:

GET → http://localhost:3000/

POST → http://localhost:3000/alunos

POST → http://localhost:3000/alunos/1/cursos

PUT → http://localhost:3000/alunos/1

DELETE → http://localhost:3000/alunos/1

Em requisições POST/PUT, selecione:

Aba Body → raw → JSON

Cole os exemplos de JSON acima.

Execute as requisições e visualize as respostas no Postman.

📌 Projeto desenvolvido para estudos em Node.js e Express.
