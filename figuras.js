// Interactuando con JavaScript desde HTML

console.group('Cuadrados');

function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

console.groupEnd();


console.group('Circulos');

function diametroCirculo (radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo (radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


console.group('Triangulos');

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

function clearInput () {
    Object.values(
        document.getElementsByTagName('form')
    ).map(x => x.reset())
}

console.groupEnd();

// Aqui interactuamos con el HTML

// Cuadrados 
function calcularPerimetroCuadrado() {
    const input = document.getElementById('inputCuadrado');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);

    swal('Resultado','El perimetro es: ' + perimetro + 'cm').then(clearInput);
}

function calcularAreaCuadrado() {
    const input = document.getElementById('inputCuadrado');
    const value = input.value;
    const area = areaCuadrado(value);

    swal('Resultado','El área es: ' + area + 'cm^2').then(clearInput);
}

// Circulos
function calcularPerimetroCirculo() {
    const input = document.getElementById('inputCirculo');
    const value = input.value;
    const perimetro = perimetroCirculo(value);

    swal('Resultado','El perimetro es: ' + perimetro + 'cm').then(clearInput);
}

function calcularAreaCirculo() {
    const input = document.getElementById('inputCirculo');
    const value = input.value;
    const area = areaCirculo(value);

    swal('Resultado','El área es: ' + area + 'cm^2').then(clearInput);
}

// Triángulos
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById('inputTriangulo1');
    const inputLado2 = document.getElementById('inputTriangulo2');
    const inputBase = document.getElementById('inputTriangulo3');
    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value);
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);

    swal('Resultado','El perimetro es: ' + perimetro + 'cm').then(clearInput);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById('inputTriangulo3');
    const inputAltura = document.getElementById('inputTriangulo4');
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;
    const area = areaTriangulo(valueBase, valueAltura);

    swal('Resultado','El área es: ' + area + 'cm^2').then(clearInput);
}