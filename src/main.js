import {createTripInfo} from './components/trip-info.js';
import {createTripMenu} from './components/menu.js';
import {createFilters} from './components/filter.js';
import {createTripSort} from './components/sorting.js';
import {createTripForm} from './components/form.js';
import {createTripCards} from './components/card.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// Маршрут
const containerTripInfo = document.querySelector(`.trip-info`);
render(containerTripInfo, createTripInfo(), `afterBegin`);

// Меню
const containerTripMenu = document.querySelector(`.trip-controls > h2:first-of-type`);
render(containerTripMenu, createTripMenu(), `afterEnd`);

// Фильтры
const containerTripFilters = document.querySelector(`.trip-controls > h2:nth-of-type(2)`);
render(containerTripFilters, createFilters(), `afterEnd`);

// Сортировка
const containerTripSort = document.querySelector(`.trip-events > h2`);
render(containerTripSort, createTripSort(), `afterEnd`);

// Форма создания/редактирования
const containerTripForm = document.querySelector(`.trip-sort`);
render(containerTripForm, createTripForm(), `afterEnd`);


// Карточки
const containerTripCard = document.querySelector(`.event`);
render(containerTripCard, createTripCards(), `afterEnd`);
