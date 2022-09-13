  class Veiculo {
    constructor(rodas = 2){
      this.rodas = rodas;
    }
  }

  class Fiat extends Veiculo {
    constructor(rodas){
      super(rodas)
    }
  }

  class Caminhao extends Veiculo {
    constructor(rodas = 8){
      super(rodas);
    }
  }

  const volto = new Caminhao(9)
  const uno = new Fiat()

  console.log(volto.rodas);