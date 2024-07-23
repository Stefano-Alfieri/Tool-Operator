async function logout(event) {
    event.preventDefault();
    const token = localStorage.getItem('authToken');

try {
    const response = await fetch('http://localhost:8080/auth/logout', {
        method: 'POST',
        headers: {
            'Authorization': `${token}`
        }
    });

    if (response.status === 200) {
        localStorage.removeItem('authToken');
        window.location.href="./Home.html"
    } 
} catch (error) {
    console.error('Error during logout:', error);
}

}