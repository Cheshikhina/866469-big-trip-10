import {EVENT_TYPES} from '../const.js';
import {DESTINATION} from '../const.js';
import {DESCRIPTON} from '../const.js';
import {OPTIONS} from '../const.js';
import {MONTHS} from '../const.js';
import {getObjectCard} from '../utils.js';

export let newDataCard = getObjectCard(EVENT_TYPES, DESTINATION, OPTIONS, MONTHS, DESCRIPTON);
