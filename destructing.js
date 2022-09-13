const pessoa = {
  nome: 'aa',
  idade: 10,
  endereco: {
    logradouro: 'rua ',
    numero: 100
  }
}

const {idade, nome} = pessoa;
console.log(idade, nome);

const {nome: n, idade: i} = pessoa;
console.log(n, i);
