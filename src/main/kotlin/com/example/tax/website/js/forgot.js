
const form = document.getElementById("forgot-form");
// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the username and password values
    const username = document.getElementById("username").value;
    const old_password = document.getElementById("old_password").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const apiUrl = 'http://localhost:5051/forgot-pin?newPassword='+password
    if (password == confirm_password) {
        const registerRequest = {
            "username": username,
            "password": old_password,
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
                console.log(data)
                if(data == "Password updated successfully") {

                }else {
                    alert("Failed to update password, please use corect email and old password")
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