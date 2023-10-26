
// Get the form element
const signUpButtonLogin = document.getElementById("sign_up_button");
const form = document.getElementById("login_form");
const forgot_pass = document.getElementById("forgot_pass");

forgot_pass.addEventListener("click", function(event) {
   window.location.href = "forgot_password.html";
});

signUpButtonLogin.addEventListener("click", function() {
   window.location.href = "register.html";
});
// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
   event.preventDefault(); // Prevent the form from submitting

   // Get the username and password values
   const username = document.getElementById("username").value;
   const password = document.getElementById("password").value;
   const apiUrl =  'http://localhost:5051/login'
   const loginReq = {
      "username": username,
      "password": password
   }

   fetch(apiUrl, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginReq)
   })
   .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text(); // or response.json() for JSON data
    })
    .then(data => {
      if(data == "Login successful") {
         window.location.href = "tax-regine.html";
      }else {
         alert("Login failed, Please try again with correct credentials.")
      }
    })
    .catch(error => {
      // Handle errors, e.g., network issues or failed requests
      console.error('Fetch Error:', error);
    });

});