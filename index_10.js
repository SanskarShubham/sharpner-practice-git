const form =  document.querySelector('form');
const fruits = document.querySelector('.fruits');
form.addEventListener('submit', function(event) {


event.preventDefault();
// Selected the input element

const fruitToAdd = document.getElementById('fruit-to-add');
// Created the Li
const newLi = document.createElement('li');
newLi.className ='fruit';
newLi.innerHTML =fruitToAdd.value +'<button class="delete-btn">x</button><button class="edit-btn">edit</button>';
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

fruits.addEventListener('click', function(event) {
  
    if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        // console.log(fruitToDelete);
        
        fruits.removeChild(fruitToDelete);
    }
    
})