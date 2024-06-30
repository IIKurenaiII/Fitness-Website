document.addEventListener('DOMContentLoaded', (event) => {
    const registerBtn = document.getElementById('registerbtn');
    const authorizationBtn = document.getElementById('authorizationbtn');

    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            const login = document.querySelector('input[placeholder="Логін"]').value.trim();
            const password = document.querySelector('input[placeholder="Пароль"]').value.trim();
            const email = document.querySelector('input[placeholder="Пошта"]').value.trim();

            if (!login || !password || !email) {
                alert('Будь ласка, заповніть всі поля.');
                return;
            }

            let users = JSON.parse(localStorage.getItem('users')) || [];
            const newUser = {
                login: login,
                password: password,
                email: email
            };
            users.push(newUser);

            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('lastUser', JSON.stringify(newUser));

            alert('Дані користувача збережено локально!');

            window.location.href = "authorization.html";
        });
    }

    if (authorizationBtn) {
        authorizationBtn.addEventListener('click', () => {
            const login = document.getElementById('login').value.trim();
            const password = document.getElementById('password').value.trim();

            if (!login || !password) {
                if (!login) {
                    document.getElementById('login').style.border = '2px solid red';
                } else {
                    document.getElementById('login').style.border = '';
                }
                if (!password) {
                    document.getElementById('password').style.border = '2px solid red';
                } else {
                    document.getElementById('password').style.border = '';
                }
                alert('Будь ласка, заповніть всі поля.');
                return;
            }

            let users = JSON.parse(localStorage.getItem('users')) || [];

            const userExists = users.some(user => user.login === login && user.password === password);

            if (userExists) {
                localStorage.setItem('currentUser', login);

                window.location.href = "home.html";
            } else {
                document.getElementById('login').style.border = '2px solid red';
                document.getElementById('password').style.border = '2px solid red';
                alert('Невірний логін або пароль.');
            }
        });
    }

    const userLoginSpan = document.getElementById('userLogin');
    if (userLoginSpan) {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            userLoginSpan.textContent = currentUser;
        } else {
            userLoginSpan.textContent = 'Гість';
        }
    }
});
