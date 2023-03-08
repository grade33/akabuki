import Swiper, { Navigation } from 'swiper';

import 'swiper/css'; // eslint-disable-line import/no-unresolved
import 'swiper/css/navigation'; // eslint-disable-line import/no-unresolved
import 'swiper/css/pagination'; // eslint-disable-line import/no-unresolved
import 'swiper/css/scrollbar'; // eslint-disable-line import/no-unresolved
import { breakpointsMin } from '../utils/breakpoints';
import { classNames } from '../utils/classNames';

export function initSwiperStreamlining() {
  const classSwiper = classNames.swiper.streamlining.swiper;

  return new Swiper(`.${classSwiper}`, {
    modules: [Navigation],
    navigation: {
      prevEl: `.${classNames.swiper.streamlining.prevBtn}`,
      nextEl: `.${classNames.swiper.streamlining.nextBtn}`,
    },
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 1000,
  });
}

export function initSwiperBlog() {
  const classSwiper = classNames.swiper.blog;

  return new Swiper(`.${classSwiper}`, {
    slidesPerView: 1.155,
    spaceBetween: 20,
    speed: 1000,
    breakpoints: {
      [breakpointsMin.md]: {
        slidesPerView: 2.058,
      },
    },
  });
}

export function initSwiperReviews() {
  const classSwiper = classNames.swiper.reviews.swiper;

  return new Swiper(`.${classSwiper}`, {
    modules: [Navigation],
    navigation: {
      prevEl: `.${classNames.swiper.reviews.prevBtn}`,
      nextEl: `.${classNames.swiper.reviews.nextBtn}`,
    },
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 1000,
    breakpoints: {
      [breakpointsMin.md]: {
        slidesPerView: 1.072,
      },
      [breakpointsMin.xl]: {
        slidesPerView: 2.11,
      },
    },
  });
}
