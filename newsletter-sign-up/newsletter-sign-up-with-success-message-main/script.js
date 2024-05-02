const $form = document.querySelector('form');
const $card_1 = document.querySelector('.card');
const $card_2 = document.querySelector('.container-success');
const $email = document.getElementById('email');
const $errorMessage = document.querySelector('.error-message');
const $invalid_message = document.querySelector('.invalid-email');

$form.addEventListener('submit', (e) => {
    e.preventDefault();

    let correo = $email.value;

    if (!correo.includes('@')) {
        const emailError = document.createElement('div');
        emailError.textContent = 'El carácter "@" no está presente en el correo electrónico.'; // Corrección aquí
        emailError.classList.add('error-style'); 
        document.body.appendChild(emailError);
        $errorMessage.parentNode.insertBefore(emailError, $errorMessage);
        $invalid_message.classList.remove('hide');
    } else {
        $card_1.classList.add('hide');
        $card_2.classList.remove('hide');
    }
    

    console.log($email.value);

    

});
