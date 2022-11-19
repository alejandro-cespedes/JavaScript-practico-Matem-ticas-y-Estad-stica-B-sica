console.group('Cuadrado') 

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

console.groupEnd('Cuadrado') 

console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,

  };
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

function CalcularAlturaTriangulo(lado1, base) {
  if (lado1 == base) {
    console.warn('Este no es un triangulo isosceles')
  }
  else {
    return Math.sqrt((lado1 ** 2) - ((base ** 2) / 4))
  }
}


function CalcularAlturaTrianguloEscaleno(lado1, lado2, lado3) {
  if (lado1 && lado2 == lado3 || lado2 && lado3 == lado1){
    return console.warn('False')
  }
  else {
    const semiperimetro = (lado1 + lado2 + lado3) / 2
    return (2 / lado1 ) * (Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3)))
  }
}

console.groupEnd('Triangulo') 


console.group('Porcentaje')


  const users = [];
    users.push({ 
    id: 123, 
    name: 'Juanito Alcachofa' 
    });

    users.push({
    id: 456, 
    name: 'Juanita Alcaparra' });

    function solution(users, id) {
    let usuario = users.find((item) =>  item.id == id )
    if (usuario) {
      return usuario.name
    } else {
      return false
    }
}
  
console.groupEnd('Porcentaje') 