const quoteStart = 'Don t judge each day by the harvest you reap ';
const quoteEnd = 'but by the seeds you plant.';

// Concatenación de las dos partes de la cita
const finalQuote = quoteStart + quoteEnd;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = finalQuote;

section.appendChild(para1);
