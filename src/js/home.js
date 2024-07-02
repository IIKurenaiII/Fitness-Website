document.addEventListener('DOMContentLoaded', (event) => {
    const lastUser = JSON.parse(localStorage.getItem('lastUser'));

    if (lastUser) {
        document.getElementById('login').value = lastUser.login;
        document.getElementById('email').value = lastUser.email;
    }
});
