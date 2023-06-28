export const initBurgerMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.burger-menu');
    const closeItem = document.querySelector('.burger-menu__close');
    const background = document.querySelector('.burger-menu__background');

    hamburger.addEventListener('click', () => {
        menu.classList.add('burger-menu_active');
    });

    closeItem.addEventListener('click', () => {
        menu.classList.remove('burger-menu_active');
    });
    background.addEventListener('click', () => {
        menu.classList.remove('burger-menu_active');
    });
}
