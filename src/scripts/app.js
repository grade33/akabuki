import { Select } from './vendor/Select';
import {
  initSwiperBlog,
  initSwiperReviews,
  initSwiperStreamlining,
} from './modules/swiper';
import { initAcc } from './modules/accordion';
import { closePopup, openPopup } from './modules/popups';
import { headerBlur, headerHide } from './modules/header';
import { burgerMenu } from './modules/burger-menu';

import 'normalize.css';
import '../styles/main.scss';

// Header
headerBlur();
headerHide();

// Burger Menu
burgerMenu();

// Popups
openPopup();
closePopup();

// Select
new Select('.select'); // eslint-disable-line

// Swiper
initSwiperStreamlining();
initSwiperBlog();
initSwiperReviews();

// Accordion
initAcc();
