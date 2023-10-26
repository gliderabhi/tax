
const read_document = document.getElementById("read_document");
const switch_accept = document.getElementById("switch_accept");
const submit = document.getElementById("submit_button");


const userName = document.getElementById("name");
const username_top = document.getElementById("username_top");
const email = document.getElementById("pNo");
const level = document.getElementById("level");

document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = 'http://localhost:5051/getUser?userName=' + "aa"
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // or response.json() for JSON data
        })
        .then(data => {
            const obj = JSON.parse(data);
            console.log(data + "    " + obj + " " + obj.username + "    " + obj.email);
            userName.text = obj.username;
            email.text = obj.email;
            username_top.textContent = obj.username
        })
        .catch(error => {
            // Handle errors, e.g., network issues or failed requests
            console.error('Fetch Error:', error);
        });
});

var read_document_bool = false;
var switch_accept_bool = false;

read_document.addEventListener("click", function (event) {
    read_document_bool = !read_document_bool
});

switch_accept.addEventListener("click", function (event) {
    switch_accept_bool = !switch_accept_bool
});

submit.addEventListener("click", function (event) {
    if (switch_accept_bool == true && read_document_bool == true) {
        window.location.href = "report.html";
    } else {
        alert("Please check all options")
    }
});