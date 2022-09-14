//for in percorre index

//for of percorre elementos
for(let letra of "abcd"){
  console.log(letra)
}

const carros = ['uno', 'ferrari', 'corsa']
const carrosMap = new Map(
  [
    ['Uno', { rapido: true}],
    ['Ferrari', { rapido: true}],
    [carros[2], { rapido: true}],
  ]
)

console.log(typeof(carros))

for(let carro of carros){
  console.log(carro)
}

for(let cv of carrosMap.keys()){
  console.log(cv);
}

for(let [cv, v] of carrosMap.entries()){
  console.log(cv, v);
}

for(let v of carrosMap.values()){
  console.log(v);
}