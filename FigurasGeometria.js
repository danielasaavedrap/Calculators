//funciones del cuadrado
function calPeriCuadrado(){
    let input = document.getElementById("ladoCuadrado");
    let valorInput = Number(input.value);

    let perimetro = valorInput *4;

    const resultCuadr = document.getElementById("resultCuadr")
    resultCuadr.innerText = "El perímetro del cuadrado es " + perimetro + " cm";
}
function calAreaCuadrado(){
    let input = document.getElementById("ladoCuadrado");
    let valorInput = Number(input.value);

    let area = valorInput *valorInput;
    
    const resultCuadr = document.getElementById("resultCuadr")
    resultCuadr.innerText = "El área del cuadrado es " + area + " cm2";
}
function calVolCuadrado(){
    let input = document.getElementById("ladoCuadrado");
    let valorInput = Number(input.value);

    let vol = valorInput *valorInput * valorInput;
    
    const resultCuadr = document.getElementById("resultCuadr")
    resultCuadr.innerText = "El volumen del cuadrado es " + vol + " cm3";
}
//funciones del triangulo
function calPeriTria(){
    let lado1 = document.getElementById("ladoTria1");
    let valorLado1 = Number(lado1.value);

    let lado2 = document.getElementById("ladoTria2");
    let valorLado2 = Number(lado2.value);

    let base = document.getElementById("baseTria");
    let valorBase = Number(base.value);

    let perimetro = valorLado1 + valorLado2 + valorBase;

    const result = document.getElementById("resultTria")
    result.innerText = "El perímetro del triangulo es " + perimetro + " cm";
}

function calAreaTria(){
    let lado1 = document.getElementById("ladoTria1");
    let valorLado1 = Number(lado1.value);

    let base = document.getElementById("baseTria");
    let valorBase = Number(base.value);

    let altura = Math.sqrt((valorLado1*valorLado1)-(valorBase/2)*(valorBase/2));
    let area = ((valorBase * altura)/2).toFixed(2);

    const result = document.getElementById("resultTria")
    result.innerText = "El área del triangulo es " + area + " cm2";
}
function calVolTria(){
    let lado1 = document.getElementById("ladoTria1");
    let valorLado1 = Number(lado1.value);

    let ancho = document.getElementById("anchoTria");
    let valorancho = Number(ancho.value);

    let base = document.getElementById("baseTria");
    let valorBase = Number(base.value);

    let altura = Math.sqrt((valorLado1*valorLado1)-(valorBase/2)*(valorBase/2));
    let vol = (valorancho * valorBase * altura).toFixed(2);

    const result = document.getElementById("resultTria")
    result.innerText = "El volumen del triangulo es " + vol + " cm3";
}
//funciones del circulo
function calPeriCir(){
    let radio = document.getElementById("radioC");
    let valorRadio = Number(radio.value);

    let perimetro = (2 * Math.PI * valorRadio).toFixed(2);
    
    const result = document.getElementById("resultCir")
    result.innerText = "El perímetro del circulo es " + perimetro + " cm";
}
function calAreaCir(){
    let radio = document.getElementById("radioC");
    let valorRadio = Number(radio.value);

    let area = (Math.PI * valorRadio * valorRadio).toFixed(2);
    
    const result = document.getElementById("resultCir")
    result.innerText = "El área del circulo es " + area + " cm2";
}
function calVolCir(){
    let radio = document.getElementById("radioC");
    let valorRadio = Number(radio.value);

    let vol = ((4 * Math.PI * valorRadio * valorRadio * valorRadio)/3).toFixed(2);
    
    const result = document.getElementById("resultCir")
    result.innerText = "El volumen del circulo es " + vol + " cm3";
}
