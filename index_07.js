const para =  document.createElement('p');
const paratext = document.createTextNode("Total fruits: 4");
para.setAttribute("id", "fruits-total");
para.appendChild(paratext);

const heading3 =  document.createElement('h3');
const heading3text = document.createTextNode("Buy high quality organic food online")
heading3.appendChild(heading3text);


const divs = document.getElementsByTagName('div');

const  firstDiv = divs[0];
const h1Div = document.querySelector('#main-heading');
firstDiv.appendChild(heading3);
heading3.style.fontWeight = 'italic';

const secondDiv = divs[1];
const fruits = document.querySelector('.fruits');
const basketHeading = document.querySelector('#basket-heading')
 secondDiv.insertBefore(para,fruits);
  