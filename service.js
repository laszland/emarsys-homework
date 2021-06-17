const START_WOKDAY_IN_MS = convertHrToMs(9);
const END_WORKDAY_IN_MS = convertHrToMs(17);
export const HRS_BETWEEN_END_TO_START = 16;
const WEEKEND_DAYS = [0, 6];

export function convertHrToMs(hour) {
  return hour * 60 * 60 * 1000;
}

export function convertMinToMs (min) {
  return min * 60 * 1000;
}

export function isOutOFWorkingTime (date) {
  const createdAtInMs = convertHrToMs(date.getHours()) + convertMinToMs(date.getMinutes());
  return !((START_WOKDAY_IN_MS <= createdAtInMs) && (createdAtInMs <= END_WORKDAY_IN_MS ));
}

export function isDateValid (date) {
  return ((date instanceof Date) && !isOutOFWorkingTime(date));
}

export function isTurnAroundValid (turnAround) {
  return turnAround > 0 && turnAround % 1 === 0;
}

export function countWeekendDays (start, end) {
  const numberOfDays = Math.round((end.getTime() - start.getTime()) / (24 * 3600 * 1000)) - 1;
  const numberOfSaturdays = Math.floor((start.getDay() + numberOfDays) / 7);
  return (2 * numberOfSaturdays + WEEKEND_DAYS.includes(end.getDay()));
}
