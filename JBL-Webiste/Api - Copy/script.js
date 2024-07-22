async function signUp() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username === '' || email === '' || password === '') {
        alert('All fields are required.');
        return;
    }

    const userData = {
        username: username,
        email: email,
        password: password
    };

    try {
        const response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log('User added:', JSON.stringify(jsonResponse, null, 2));
            alert('Sign-up successful!');
        } else {
            alert('Failed to sign up. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}
