/*function mensagem(seg, men){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(men)
    }, seg*1000)
  })
}

console.log('Aguarde um pouco...')

mensagem(3, 'Só mais um pouco...')
  .then(mensagem => console.log(mensagem))
*/
const http = require('http')

function alunos(turma){
  const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = ''

      res.on('data', dados => {
        resultado += dados
      })

      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado))
        } catch(e) {
          reject(e)
        }
      })

    })
  })
}

Promise.all([alunos('A'), alunos('B'), alunos('C')])
  .then(turmas => [].concat(...turmas))
  .then(alunos => alunos.map(aluno => aluno.nome))
  .then(nome => console.log(nome))