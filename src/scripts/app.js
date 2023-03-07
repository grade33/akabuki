import { initSelect } from './modules/select';
import { initSwiperBlog, initSwiperReviews, initSwiperStreamlining } from './modules/swiper';

import 'normalize.css';
import '../styles/main.scss';

initSelect();

// Swiper
initSwiperStreamlining();
initSwiperBlog();
initSwiperReviews();
