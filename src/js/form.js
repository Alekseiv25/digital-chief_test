export const validateForm = () => {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageTextarea = document.querySelector('#text');

    const errors = {};

    if (!nameInput.value.trim()) {
        errors.name = 'Пожалуйста, введите ваше имя';
    }

    if (!emailInput.value.trim()) {
        errors.email = 'Пожалуйста, введите вашу почту';
    } else if (!isValidEmail(emailInput.value)) {
        errors.email = 'Пожалуйста, введите корректный адрес электронной почты';
    }

    if (!messageTextarea.value.trim()) {
        errors.message = 'Пожалуйста, введите ваше сообщение';
    }

    displayErrors(errors);

    if (Object.keys(errors).length === 0) {
        sendFormData(nameInput.value.trim(), emailInput.value.trim(), messageTextarea.value.trim());
    }
};

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const displayErrors = (errors) => {
    const nameError = document.querySelector('#errorName');
    const emailError = document.querySelector('#errorEmail');
    const messageError = document.querySelector('#errorText');

    nameError.textContent = errors.name || '';
    emailError.textContent = errors.email || '';
    messageError.textContent = errors.message || '';
};

const sendFormData = (name, email, message) => {

    const formData = {
        name,
        email,
        message
    };


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                console.log('Данные успешно отправлены');
            } else {
                throw new Error('Ошибка при отправке данных на сервер');
            }
        })
        .catch(error => {
            console.error(error);
        });
};
