document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
});

function fetchUserData() {
    fetch('http://localhost:8080/retrival/all-user')
    .then(response => response.json())
    .then(data => {
        displayUserData(data);
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });
}

function displayUserData(users) {
    const userListDiv = document.getElementById('userList');
    userListDiv.innerHTML = ''; // Clear existing content

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.textContent = user.name; // Display only the name

        // Add a click event listener to each user name
        userDiv.addEventListener('click', function() {
            openChatbox(user);
        });

        userListDiv.appendChild(userDiv);
    });
}

function openChatbox(user) {
    // You can customize the behavior of opening the chatbox here
    // For example, you can show a modal, toggle a hidden chatbox, or redirect to a chat page
    // For demonstration purposes, let's log the user details
    console.log('Opening chatbox for user:', user);
    localStorage.setItem("selectedUser", JSON.stringify(user));
    window.location.href = 'chatbox.html'
}
