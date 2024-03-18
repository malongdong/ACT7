// Declaración de variables
let myName = 'Default';
myName = 'Rogelio';

let myAge = 21; 

// Agregar contenido a la sección
section.innerHTML = ' ';
const para1 = document.createElement('p');
const para2 = document.createElement('p');
para1.textContent = myName;
para2.textContent = `En 20 años, tendré ${myAge + 20} años`; // Se convierte myAge a string
section.appendChild(para1);
section.appendChild(para2);