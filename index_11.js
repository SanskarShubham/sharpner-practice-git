const filter = document.getElementById('filter');

filter.addEventListener('keyup',function(event){
    const insertedItem = event.target.value.toLowerCase();
    
    const fruitItem =  document.getElementsByClassName('fruit');

    for (let i = 0; i < fruitItem.length; i++) {
        const currnetFruitText =fruitItem[i].firstChild.textContent.toLowerCase(); 
        const currnetFruitDesc =fruitItem[i].firstElementChild.textContent.toLowerCase(); 

        if (currnetFruitText.indexOf(insertedItem) === -1 && currnetFruitDesc.indexOf(insertedItem) === -1) {
            fruitItem[i].style.display = 'none';
        }else{
            fruitItem[i].style.display = 'flex';
        }
    }

})


// desc

const form =  document.querySelector('form');
const fruits = document.querySelector('.fruits');
form.addEventListener('submit', function(event) {


event.preventDefault();
// Selected the input element

const fruitToAdd = document.getElementById('fruit-to-add');
const fruitDesc = document.getElementById('fruit-desc');
// Created the Li
const newLi = document.createElement('li');
newLi.className ='fruit';
newLi.innerHTML =`${fruitToAdd.value} <p class="fruit-text-desc">${fruitDesc.value}</p><button class="delete-btn">x</button>`;
console.log(newLi);
// const newLiText = document.createTextNode(fruitToAdd.value);
// newLi.appendChild(newLiText);
// 
// // Create a delete button to be added inside Li
// const deleteBtn  = document.createElement('button');
// const deleteBtnText = document.createTextNode('x');
// deleteBtn.appendChild(deleteBtnText);
// deleteBtn.className = 'delete-btn';
// newLi.appendChild(deleteBtn);
// Adding Li as the last element of unordered list
fruits.appendChild(newLi);

})
