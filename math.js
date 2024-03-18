// Declaración de variables
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;

// Operaciones matemáticas
let suma = num1 + num2; 
let diferencia = num3 - num4; 

let finalResult = suma * diferencia;

const finalResultCheck = finalResult === 48 ? `¡Sí, bien hecho!` : `No, es ${finalResult}`;

let evenOddResult = finalResult % 2 === 0 ? 'El resultado final es par!' : 'El resultado final es impar. Hmmm.';

// Agregar contenido a la sección
section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `¿Es finalResult 48? ${finalResultCheck}`;
section.appendChild(para1);

const para2 = document.createElement('p');
para2.textContent = evenOddResult;
section.appendChild(para2);
