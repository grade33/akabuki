import { initSelect } from './modules/select';
import {
  initSwiperBlog,
  initSwiperReviews,
  initSwiperStreamlining,
} from './modules/swiper';

import 'normalize.css';
import '../styles/main.scss';
import { initAcc } from './modules/accordion';

initSelect();

// Swiper
initSwiperStreamlining();
initSwiperBlog();
initSwiperReviews();

// Accordion
initAcc();