import { classNames } from '../utils/classNames';

export function burgerMenu() {
  const classBurgerBtn = classNames.burgerMenu.burger;
  const classCloseBtn = classNames.burgerMenu.close;
  const classMenu = classNames.burgerMenu.menu;
  const classMenuActive = classNames.burgerMenu.menuActive;

  const burgerBtn = document.querySelector(`.${classBurgerBtn}`);
  const closeBtn = document.querySelector(`.${classCloseBtn}`);
  const menu = document.querySelector(`.${classMenu}`);

  burgerBtn.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    menu.classList.add(classMenuActive);
  });

  closeBtn.addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    menu.classList.remove(classMenuActive);
  });
}
