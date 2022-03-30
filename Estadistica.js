let listaNumeros1 = [];
let listaNumeros2 = [];
let listaNumeros3 = [];

//calculo de la media

function AgregarNum1() {
  let input = document.getElementById("num1");
  let valorNum = Number(input.value);

  listaNumeros1.push(valorNum);

  const result = document.getElementById("grupoNumeros1");
  result.innerText = "[ " + listaNumeros1 + " ]";

  return listaNumeros1;
}

function mediaAritmetica() {
  let lista = listaNumeros1;
  let sumalista = lista.reduce(function (valorAcumulado = 0, elementoNuevo) {
    return valorAcumulado + elementoNuevo;
  }); //suma cada uno de los elementos
  let promediolista = Number((sumalista / lista.length).toFixed(2));

  const result = document.getElementById("resultMedia1");
  result.innerText = "La media aritmética es " + promediolista;
}

function mediaGeometrica() {
  let lista = listaNumeros1;
  let multLista = lista.reduce((valI = 0, elem) => valI * elem);
  let mediaGeo = Number(Math.pow(multLista, 1 / lista.length).toFixed(2));

  const result = document.getElementById("resultMedia1");
  result.innerText = "La media geométrica es " + mediaGeo;
}

//calculo de la mediana y la moda

function AgregarNum2() {
  let input = document.getElementById("num2");
  let valorNum = Number(input.value);

  listaNumeros2.push(valorNum);

  const result = document.getElementById("grupoNumeros2");
  result.innerText = "[ " + listaNumeros2 + " ]";

  return listaNumeros2;
}

function mediana() {
  let lista = listaNumeros2;
  let listaOrdenada = lista.sort(function (a, b) {
    return a - b;
  }); //ordenar la lista
  let mitadlista = parseInt(listaOrdenada.length / 2);
  let mediana;
  console.log(listaOrdenada);

  if (listaOrdenada.length % 2 == 0) {
    let elementos = [listaOrdenada[mitadlista], listaOrdenada[mitadlista - 1]];
    mediana = media(elementos);
  } else {
    mediana = listaOrdenada[mitadlista];
  }

  const result = document.getElementById("resultMedia2");
  result.innerText = "La mediana es " + mediana;
}

function moda() {
  let lista = listaNumeros2;
  let lista1Count = {};

  lista.map(function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  });
  let Lista1Array = Object.entries(lista1Count).sort(function (
    valorAcum,
    nuevoValor
  ) {
    return nuevoValor[1] - valorAcum[1];
  });
  let moda = Lista1Array[0];
  let modaCant = moda[1];
  let modaNum = Number(moda[0]);

  const result = document.getElementById("resultMedia2");
  result.innerText = "La moda es " + modaNum + " ( " + modaCant + " veces)";
}

//varianza y desviacion estandar

function AgregarNum3() {
  let input = document.getElementById("num3");
  let valorNum = Number(input.value);

  listaNumeros3.push(valorNum);

  const result = document.getElementById("grupoNumeros3");
  result.innerText = "[ " + listaNumeros3 + " ]";

  return listaNumeros2;
}

function varianza() {
  let lista = listaNumeros3;
  let sumaMedia = lista.reduce(function (valorAcumulado = 0, elementoNuevo) {
    return valorAcumulado + elementoNuevo;
  }); //suma cada uno de los elementos
  let mediaL = Number((sumaMedia / lista.length).toFixed(2));

  let valor1 = lista.map((n) => (n - mediaL) ** 2);
  let valor2 = valor1.reduce((valAc = 0, ele) => valAc + ele);
  let varianza = Number((valor2 / lista.length).toFixed(2));

  const result = document.getElementById("resultMedia3");
  result.innerText = "La varianza es " + varianza;
}

function desviacionEstandar() {
  let lista = listaNumeros3;

  let sumaMedia = lista.reduce(function (valorAcumulado = 0, elementoNuevo) {
    return valorAcumulado + elementoNuevo;
  }); //suma cada uno de los elementos
  let mediaL = Number((sumaMedia / lista.length).toFixed(2));

  let valor1 = lista.map((n) => (n - mediaL) ** 2);
  let valor2 = valor1.reduce((valAc = 0, ele) => valAc + ele);
  let varianza = Number((valor2 / lista.length).toFixed(2));

  let desvEst = Number(Math.sqrt(varianza).toFixed(2));

  const result = document.getElementById("resultMedia3");
  result.innerText = "La desviación es " + desvEst;
}
