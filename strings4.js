const theorem = 'Pitágoras';

const a = 5;
const b = 8;

const myString = `Utilizando el teorema de ${theorem}, podemos calcular que si los dos lados más cortos de un triángulo rectángulo tienen longitudes de ${a} y ${b}, la longitud de la hipotenusa es ${Math.sqrt(a**2 + b**2)}`;

// Mostrar la cadena en el HTML
const section = document.querySelector('section');

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);