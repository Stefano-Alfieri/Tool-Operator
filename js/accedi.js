async function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
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
            const ruolo = data.ruolo;
            localStorage.setItem('authToken', token);
            if(ruolo==="ADMIN"){
                window.location.href="./Admin.html"

            }else{
                window.location.href="./Home.html"

            }
        } 
    } catch (error) {
        console.error('Error during login:', error);
    }
}
async function login2(event) {
    event.preventDefault();
    const email = document.getElementById('emailAg').value;
    const password = document.getElementById('passwordAg').value;;
    try {
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
            const ruolo = data.ruolo;
            localStorage.setItem('authToken', token);
            if(ruolo==="ADMIN"){
                window.location.href="./Admin.html"

            }else{
                window.location.href="./Home.html"

            }
        } 
    } catch (error) {
        console.error('Error during login:', error);
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
        localStorage.removeItem('userRole');
    } 
} catch (error) {
    console.error('Error during logout:', error);
}

}