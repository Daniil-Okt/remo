/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  validForm,
} from './modules';

import BurgerMenu from './modules/BurgerMenu';

// import Tabs from 'modules/Tabs';

// import { MousePRLX } from './libs/parallaxMouse'

// import AOS from 'aos'

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();

/* Добавление класса touch для HTML если браузер мобильный */
// addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
// addLoadedClass();

/* Модуль для работы с меню (Бургер) */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();

/** Параллакс мышей */
// const mousePrlx = new MousePRLX({});

/** Фиксированный header */
// headerFixed();

/**
 *  Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
// togglePopupWindows();

// =======================================================================================================
// const tabs = new Tabs('default-tabs', {});

/*Динамический адаптив ===================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
// import { useDynamicAdapt } from './modules/dynamicAdapt.js'
// useDynamicAdapt()
// =======================================================================================================

/* Валидация формы =======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
  Раскоментировать для использования
*/ 
// добавить класс .popup-thanks для модального окна спасибо
// const popupTranks = document.querySelector('.popup-thanks')
// const formNAME = document.getElementById('form-NAME')
// validForm(fromName, popupTranks)
// =======================================================================================================
const swiperCompanies = new Swiper('.companies__swiper', {
  speed: 400,
  spaceBetween: 0,
  slidesPerView: 3,
  modules: [Autoplay, Pagination],
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  loop: false,
  pagination: {
    el: ".companies__pagination",
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 0,
      slideToClickedSlide: true,
      loop: true,
  },
    950: {
      slidesPerView: 6,
      spaceBetween: 25,
      slideToClickedSlide: true,
      loop: true,
  },
  },
});
const swiperCompanies2 = new Swiper('.companies__swiper2', {
  speed: 400,
  spaceBetween: 0,
  slidesPerView: 3,
  modules: [Autoplay, Pagination],
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  loop: false,
  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 0,
      slideToClickedSlide: true,
      loop: true,
  },
    950: {
      slidesPerView: 6,
      spaceBetween: 25,
      slideToClickedSlide: true,
  },
  },
});