const quote = 'I dO nOT lIke gREen eGgS anD HAM.';

let fixedQuote; // Declare fixedQuote once

// Capitalize the first letter
fixedQuote = quote.charAt(0).toUpperCase() + quote.slice(1);

// Replace all occurrences of "huevos verdes con jamón"
fixedQuote = fixedQuote.replace('huevos verdes con jamón', 'tomates con queso', 'g');

// Add a point to the end
const finalQuote = fixedQuote + '.';

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = fixedQuote;
const para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);