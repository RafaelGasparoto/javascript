function Carro (velocidadeMaxima = 200){
  let velocidadeAtual = 0;

  this.acelerar = function (){
    velocidadeAtual += velocidadeAtual <= velocidadeMaxima ? 100 : 50
  }

  this.velocidade = function (){
    return velocidadeAtual;
  }
}

const uno = new Carro(300)
uno.acelerar()
uno.acelerar()
console.log(uno.velocidade())