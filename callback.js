const fabricantes = ['BMW', 'Ferrari', 'Mercendes']

fabricantes.forEach((fabricante) => console.log(fabricante))

const notas = [1, 6, 2, 9, 10, 6, 3, 3]

const notasBaixas = notas.filter(nota => nota < 6)

console.log(notasBaixas)