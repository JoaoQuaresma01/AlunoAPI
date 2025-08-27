const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

var alunos = [
    {
        ra: 1, nome: "Diego", turma: 'ADS',
        cursos: ["Javascript", "ReactJS", "Redux"]
    },
    {
         ra: 2, nome: 'Leandro', turma: 'DSM',
         cursos: ["VueJS", "Ruby on Rails", "Node"]
    },
    {
         ra: 3, nome: "João", turma: 'DSM',
         cursos: ["Python", "Django", "Flask"]
    },
    {
        ra: 4, nome: "Victor", turma: 'ADS',
        cursos: ["Javascript", "ReactJS", "Node"]
    },
    {
        ra: 5, nome: "Carlos", turma: 'ADS',
        cursos: ["Javascript", "ReactJS", "Node"]
    }
]

//Primeiro endpoint
app.get('/', (req, res) => {
    res.json(alunos)
})

app.post('/alunos', (req, res) => {
    const { ra, nome, turma, cursos } = req.body;
    alunos.push({ ra, nome, turma, cursos });
    res.send(alunos);
});

app.post('/alunos/:ra/cursos', (req, res) => {
    const { ra } = req.params;              // pega o RA da URL
    const { curso } = req.body;             // pega o curso do corpo da requisição

    // encontra o aluno pelo RA
    const aluno = alunos.find(a => a.ra === parseInt(ra));

    if (!aluno) {
        return res.status(404).send({ message: 'Aluno não encontrado' });
    }

    // adiciona o curso
    aluno.cursos.push(curso);

    res.send(aluno); // retorna o aluno atualizado
});

app.put('/alunos/:ra', (req, res) => {
    const { ra } = req.params
    const { nome, turma, cursos } = req.body
    const alunoIndex = alunos.findIndex(a => a.ra === parseInt(ra))
    if (alunoIndex !== -1) {
        alunos[alunoIndex] = { ra: parseInt(ra), nome, turma, cursos }
        res.send(alunos)
    } else {
        res.status(404).send({ message: 'Aluno não encontrado' })
    }
})

app.delete('/alunos/:ra', (req, res) => {
    const { ra } = req.params
    alunos = alunos.filter(a => a.ra !== parseInt(ra))
    res.send(alunos)
})

