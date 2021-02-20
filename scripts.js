const modificaPares = (arrayEntrada, funcion) => {
  arraySalida = []
  for (let i in arrayEntrada) {
    if (i % 2 === 1) {
      arraySalida.push(funcion(arrayEntrada[i]));
    }
    else {
      arraySalida.push(arrayEntrada[i]);
    }
  }
  return arraySalida;
}

let palabras = ["cienpiés", "silla", "spaghetti", "javascript", "mochila", "hígado"];
let palabrasParesModificadas = modificaPares(palabras, elemento => {
  palabraInversa = "";
  for (let letra in elemento) {
    palabraInversa += `${elemento.charAt(elemento.length - letra - 1)}`;
  }
  return palabraInversa;
})
console.log("Palabras originales: " + palabras + "\nPalabras modificadas: " + palabrasParesModificadas);
