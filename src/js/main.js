import { initBurgerMenu } from "./burger";
import { validateForm } from './form.js';

document.getElementById('signup').addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
});

initBurgerMenu();
