document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the Sign Up button
    document.getElementById('signupButton').addEventListener('click', function() {
        // Get form data
        var userName = document.getElementById('userName').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var mobNo = document.getElementById('mobNo').value;

        if (userName === '' || email === '' || password === '' || mobNo === '') {
            alert('Please enter all the fields.');
            return;
        }

        // Create an object with the form data
        var formData = {
            userName: userName,
            email: email,
            password: password,
            mobNo: mobNo
        };

        // Send form data to the backend
        fetch('http://localhost:8080/save/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            // Check if the response is successful
            if (response.ok) {
                return response.text(); // Parse JSON response
            } else {
                throw new Error('Sign up failed'); // Throw an error if response is not OK
            }
        })
        .then(data => {
            // Handle successful sign up
            alert('Sign up successful!');
            window.location.href = 'signin.html'
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
            alert('An error occurred during sign up.');
        });
    });
});
