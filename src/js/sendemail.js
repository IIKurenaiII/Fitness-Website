document.addEventListener('DOMContentLoaded', function() {
    function closeModal() {
        var modal = document.getElementById('myModal');
        modal.style.display = 'none';
    }

    var myModal = new bootstrap.Modal(document.getElementById('myModal'));

    function openEmailModal() {
        var emailForm = document.querySelector('.modal__email-form');
        emailForm.style.display = 'block';
    }

    function closeModal() {
        var emailForm = document.querySelector('.modal__email-form');
        emailForm.style.display = 'none';

        myModal.hide();
    }

    function sendEmail() {
        var emailSubject = document.getElementById('emailSubject').value;
        var emailBody = document.getElementById('emailBody').value;
    
        axios.post('./send.php', {
            emailSubject: emailSubject,
            emailBody: emailBody
        })
        .then(function (response) {
            console.log(response.data);
            closeModal();
            document.getElementById('emailSubject').value = '';
            document.getElementById('emailBody').value = '';
        })
        .catch(function (error) {
            console.error('Помилка відправлення листа:', error);
        });
    }
    

    window.openEmailModal = openEmailModal;
    window.closeModal = closeModal;
    window.sendEmail = sendEmail;
});