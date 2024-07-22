async function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');
    try {
        console.log("OK");
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        if (response.status === 200) {
            const data = await response.json();
            const token = data.token;
            localStorage.setItem('authToken', token);

            messageElement.textContent = 'Login successful';
            messageElement.style.color = 'green';
        } else {
            messageElement.textContent = 'Invalid credentials';
            messageElement.style.color = 'red';
        }
    } catch (error) {
        console.error('Error during login:', error);
        messageElement.textContent = 'Error during login';
        messageElement.style.color = 'red';
    }
    console.log(token);
}

async function logout(event) {
    event.preventDefault();
    const token = localStorage.getItem('authToken');
    const messageElement = document.getElementById('message');

try {
    const response = await fetch('http://localhost:8080/auth/logout', {
        method: 'POST',
        headers: {
            'Authorization': `${token}`
        }
    });

    if (response.status === 200) {
        localStorage.removeItem('authToken');
        messageElement.textContent = 'Logout successful';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Error during logout';
        messageElement.style.color = 'red';
    }
} catch (error) {
    console.error('Error during logout:', error);
    messageElement.textContent = 'Error during logout';
    messageElement.style.color = 'red';
}

}