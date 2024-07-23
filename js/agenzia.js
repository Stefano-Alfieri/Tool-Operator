function init(){
    isUserLoggedIn();
    getAllAgenzie();
}


function isUserLoggedIn(){
    const token = localStorage.getItem('authToken');
    if (!token){
        window.location.href="./Accedi.html"
    }
}


async function getAllAgenzie() {
    let cont =1;
    const token = localStorage.getItem('authToken');
    const messageElement = document.getElementById('message');
    try {
        const response = await fetch('http://localhost:8080/user/Agenzie', {
            method: 'GET',
            headers: {
                'Authorization': `${token}`
            }
        });
        if (response.status === 200) {
            const data = await response.json();
            const userListElement = document.getElementById('Admin');
            userListElement.innerHTML = '';
            data.forEach(user => {
                const userElement = document.createElement('tr');
                userElement.innerHTML=  `
                                            <th scope="row">${cont++}</th>
                                            <td>${user.email}</td>
                                            <td>${user.nome}</td>
                                            <td>${user.ruolo}</td>
                                        `          
                userListElement.appendChild(userElement);
            });
        }else {
                messageElement.textContent = 'Failed to get users data';
                messageElement.style.color = 'red';
            }
        } catch (error) {
            console.error('Error during fetching users data:', error);
            messageElement.textContent = 'Error during fetching users data';
            messageElement.style.color = 'red';
        }
    }

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

    window.onload = init;