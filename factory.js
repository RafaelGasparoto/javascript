function criarPessoa(nome, sobrenome){
  return {
    nome,
    sobrenome,
    idade: 15
  }
}


console.log(criarPessoa('ra', 'os'))
console.log(typeof(criarPessoa('ra', 'os')))
