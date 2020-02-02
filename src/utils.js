export const randomIndex = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const randomElement = (arr) => {
  return arr[randomIndex(1, arr.length) - 1];
};

const createTytle = (el) => {
  return (el.charAt(0).toUpperCase() + el.substr(1));
};

const createTypeGroup = (el) => {
  return (el === `check-in` || el === `sightseeing` || el === `restaurant`) ? `Activity` : `Transfer`;
};

const createPlaceholder = (obj) => {
  let title;
  switch (obj.group) {
    case `Activity`:
      title = obj.title + ` in`;
      break;
    case `Transfer`:
      title = obj.title + ` to`;
      break;
    default:
      break;
  }
  return title;
};

export const createEventTypeObject = (elements) => {
  let eventTypeObjects = [];
  for (let i = 0; i < elements.length; i++) {
    let eventTypeObject = {};
    eventTypeObject.element = elements[i];
    eventTypeObject.title = createTytle(elements[i]);
    eventTypeObject.img = `img/icons/${elements[i]}.png`;
    eventTypeObject.group = createTypeGroup(elements[i]);
    eventTypeObject.placeholder = createPlaceholder(eventTypeObject);
    eventTypeObjects.push(eventTypeObject);
  }

  return eventTypeObjects;
};

const createOptions = (optionsObject) => {
  let options = [];
  const optionsArray = [];
  const MAX_LENGTH = 20;
  for (let j = 0; j < MAX_LENGTH; j++) {
    optionsArray.push(options);
    for (let i = 0; i < randomIndex(0, 3); i++) {
      options.push(optionsObject[randomIndex(0, optionsObject.length - 1)].title + ` +` + optionsObject[randomIndex(0, optionsObject.length - 1)].price + ` €`);
    }
    options = [];
  }
  return optionsArray;
};

const getPrices = () => {
  let prices = [];
  const MAX_LENGTH = 20;
  for (let i = 0; i < MAX_LENGTH; i++) {
    prices.push(randomIndex(1, 1000));
  }
  return prices;
};

const getMonth = (index, array) => {
  return array[index];
};

const createDate = (months) => {
  const randomMonth = randomIndex(0, 11);
  const randomDate = randomIndex(1, 31);
  const randomHours = randomIndex(0, 23);
  const randomMinutes = randomIndex(0, 59);
  let anotherRandomHours = randomIndex(0, 23);
  let anotherRandomMinutes = randomIndex(0, 59);
  let myDate = {};
  myDate.dateNow = new Date(2020, randomMonth, randomDate, randomHours, randomMinutes, 0, 0);
  myDate.dateTextNow = getMonth(randomMonth, months) + ` ` + randomDate;
  myDate.timeNow = randomHours + `:` + randomMinutes;
  while (anotherRandomHours <= randomHours) {
    anotherRandomHours = randomIndex(0, 23);
  }
  while (anotherRandomMinutes <= randomMinutes) {
    anotherRandomMinutes = randomIndex(0, 59);
  }
  myDate.dateAnother = new Date(2020, randomMonth, randomDate, anotherRandomHours, anotherRandomMinutes, 0, 0);
  myDate.timeAnother = anotherRandomHours + `:` + anotherRandomMinutes;

  let getDifference = (a, b) => {
    let deffirence = b - a;
    let minutes = Math.floor((deffirence / (1000 * 60)) % 60);
    let hours = Math.floor((deffirence / (1000 * 60 * 60)) % 24);

    return [hours, minutes];
  };

  const dateDifference = getDifference(myDate.dateNow, myDate.dateAnother);

  let returnString = (value, stringElement) => {
    return value === 0 ? `` : value + stringElement;
  };

  myDate.differenceHours = returnString(dateDifference[0], `H`);

  myDate.differenceMinutes = returnString(dateDifference[1], `M`);

  return myDate;
};

const getImages = () => {
  let images = [];
  const MAX_LENGTH = 10;
  for (let i = 0; i < MAX_LENGTH; i++) {
    images.push(`http://picsum.photos/300/150?r=${Math.random()}`);
  }
  return images;
};

const getDescription = (description) => {
  const descriptionArray = description.split(`. `);
  let descriptions = [];
  const descriptionsArray = [];
  const MAX_LENGTH = 20;
  for (let j = 0; j < MAX_LENGTH; j++) {
    for (let i = 0; i < randomIndex(1, 3); i++) {
      descriptions.push(descriptionArray[randomIndex(0, descriptionArray.length - 1)]);
    }
    descriptionsArray.push(descriptions.join(`. `) + `.`);
    descriptions = [];
  }
  return descriptionsArray;
};

export const getObjectCard = (types, city, options, months, description) => {
  let objectCard = {};
  objectCard.type = createEventTypeObject(types);
  objectCard.city = city;
  objectCard.options = createOptions(options);
  objectCard.price = getPrices();
  objectCard.date = createDate(months);
  objectCard.img = getImages();
  objectCard.description = getDescription(description);
  return objectCard;
};
