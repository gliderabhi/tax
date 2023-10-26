
const form = document.getElementById("signup-form");
// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const apiUrl = 'http://localhost:5051/register'
    if (password == confirmPassword) {
        const registerRequest = {
            "username": username,
            "password": password,
            "email" : username
        }

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerRequest)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text(); // or response.json() for JSON data
            })
            .then(data => {
                if(data == "true") {
                    window.location.href = "index.html";
                }else {
                    alert("Register failed, please try again.")
                }
            })
            .catch(error => {
                // Handle errors, e.g., network issues or failed requests
                console.error('Fetch Error:', error);
            });
    }else {
        alert("Passwords dont match. Please try again.")
    }
});