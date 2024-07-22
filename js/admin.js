async function getAllAdmin() {
    let cont =0;
    const token = localStorage.getItem('authToken');
    const messageElement = document.getElementById('message');
    try {
        const response = await fetch('http://localhost:8080/Admin', {
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
                                            <th scope="row">${cont+1}</th>
                                            <td>${user.email}</td>
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

    window.onload = getAllAdmin;
