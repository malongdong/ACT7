const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

const quoteLength = quote.length;

const index = quote.indexOf(substring);

const revisedQuote = quote.slice(0, index) + "No me gustan los " + substring + "." + quote.slice(index + substring.length);

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
const para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);