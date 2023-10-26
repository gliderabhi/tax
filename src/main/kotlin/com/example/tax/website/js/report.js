document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = 'http://localhost:5051/insert'
    for (let i = 0; i < 100; i++) {
        let objs = {
            "reportDate": "202" + (i % 10) + "-01-12",
            "data": "This is report " + i
        }
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objs)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text(); // or response.json() for JSON data
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                // Handle errors, e.g., network issues or failed requests
                console.error('Fetch Error:', error);
            });
    }
});


const report_top_username = document.getElementById("report_top_username");
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
            // console.log(data + "    " + obj + " " + obj.username + "    " + obj.email);
            report_top_username.textContent = obj.username
        })
        .catch(error => {
            // Handle errors, e.g., network issues or failed requests
            console.error('Fetch Error:', error);
        });
});



const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function (event) {
    const str = startDate.value
    const end = endDate.value
    if (str != "" && end != "") {
        const apiUrl = 'http://localhost:5051/filter?startDate=' + str + '&endDate=' + end;
        fetch(apiUrl, {
            method: 'GET',
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
                console.log(typeof data)
                let ls = JSON.parse(data);
                // Get the list container element
                const listContainer = document.getElementById('list-container');
                const reports_count = document.getElementById('reports_count');
                reports_count.textContent = "of " + ls.length;
                listContainer.innerHTML = "";
                ls.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = item.data + " " + item.reportDate;
                    listContainer.appendChild(listItem);
                });
            })
            .catch(error => {
                // Handle errors, e.g., network issues or failed requests
                console.error('Fetch Error:', error);
            });
    } else {
        alert("Please select start and end dates.")
    }
});

