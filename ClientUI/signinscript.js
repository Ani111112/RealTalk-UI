function signIn() {
    var mobNo = document.getElementById('mobileNumber').value;
    var password = document.getElementById('password').value;
    
    fetch('http://localhost:8080/save/signin', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        mobNo: mobNo,
        password: password,
    }),
})
.then(response => {
    console.log(response);
    if (response.ok) {
        return response.text(); // Read the response body as plain text
    } else {
        throw new Error('Login failed'); // Throw an error to trigger the 'catch' block
    }
})
.then(data => {
    console.log(data); // Log the response text
    // Handle the response text as needed
    localStorage.setItem("currentUser", data);
    window.location.href = 'userlist.html';
})
.catch(error => {
    console.log(error);
    alert(error);
});

}