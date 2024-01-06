// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get form values
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    // Check if the email is already stored
    const existingUser = localStorage.getItem(email);
  
    if (existingUser) {
      alert("User with this email already exists!");
      return;
    }
  
    // Save user data to local storage using email as the key
    const userData = {
      username: username,
      email: email,
      phone: phone,
    };
    localStorage.setItem(email, JSON.stringify(userData));
  
    // Display the user in the unordered list
    displayUser(username, email, phone);
  
    // Clear the form fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  
  function displayUser(username, email, phone) {
    // Create a new list item
    const listItem = document.createElement("li");
  
    // Set the text content of the list item
    listItem.textContent = `${username} - ${email} - ${phone}`;
  
    // Append the list item to the unordered list
    document.getElementById("userList").appendChild(listItem);
  }
//   module.exports = handleFormSubmit;
//   module.exports = displayUser;
  
  