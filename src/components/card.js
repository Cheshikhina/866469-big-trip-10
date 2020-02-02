import {CARD_COUNT} from '../const.js';
import {randomElement} from '../utils.js';
import {randomIndex} from '../utils.js';
import {newDataCard} from '../moks/card.js';

const createOffer = (array) => {
  let offers = [];
  if (array.length === 0) {
    offers = ``;
  } else {
    randomElement(array).forEach((it) => {
      offers.push(`<li class="event__offer">${it}</li>`);
    });
  }
  return offers.join(`\n`);
};

const createTripCard = (object) => {
  let itemCards = [];

  for (let i = 0; i < randomIndex(1, 3); i++) {
    let type = randomElement(object.type);

    itemCards.push(`<li class="trip-events__item">
    <div class="event">
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="${type.img}" alt="Event type icon">
    </div>
    <h3 class="event__title">${type.placeholder} ${randomElement(object.city)}</h3>

    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${object.date.dateNow}">${object.date.timeNow}</time>
        &mdash;
        <time class="event__end-time" datetime="${object.date.dateNow}">${object.date.timeAnother}</time>
      </p>
      <p class="event__duration">${object.date.differenceHours + ` ` + object.date.differenceMinutes}</p>
    </div>

    <p class="event__price">
    &euro;&nbsp;<span class="event__price-value">${randomElement(object.price)}</span>
    </p>

    <ul class="event__selected-offers">${createOffer(object.options)}</ul>

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
    </div>
    </li>`
    );

    type = {};
  }
  return itemCards.join(`\n`);
};

export let createTripCards = () => {
  let cards = [];

  for (let i = 0; i < CARD_COUNT; i++) {
    cards.push(`<ul class="trip-days">
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${i + 1}</span>
        <time class="day__date" datetime="${newDataCard.date.dateNow}">${newDataCard.date.dateTextNow}</time>
      </div>
      <ul class="trip-events__list">${createTripCard(newDataCard)}</ul>
      </li>
      </ul>`);
  }
  return cards.join(`\n`);
};
