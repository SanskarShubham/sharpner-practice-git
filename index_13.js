function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;

localStorage.setItem("User Details", JSON.stringify({
    'username':username,
    'email':email,
    'phone':phone
}));
const user_data = JSON.parse(localStorage.getItem("User Details"));
// console.log(user_data.username);  
}
//  module.exports = handleFormSubmit;
//  module.exports = handleFormSubmit;