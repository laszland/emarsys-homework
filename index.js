const {
  convertHrToMs,
  isDateValid,
  isTurnAroundValid,
  isOutOFWorkingTime,
  HRS_BETWEEN_END_TO_START,
  countWeekendDays,
  convertMinToMs
} = require('./service');

const calculateDueDate = (date, turnAround) => {
  if (isDateValid(date) && isTurnAroundValid(turnAround)) {
    const numberOfDays = Math.floor(turnAround / 8);
    const numberOfHours = Math.floor(turnAround - (numberOfDays * 8));
    let dueDateInMs = date.getTime() + convertHrToMs(numberOfHours) + convertHrToMs(numberOfDays * 24);
    if (isOutOFWorkingTime(new Date(dueDateInMs))) {
      dueDateInMs += convertHrToMs(HRS_BETWEEN_END_TO_START);
    }
    let numberOfWeekendDays = countWeekendDays(date, new Date(dueDateInMs));
    while (numberOfWeekendDays > 0) {
      const acutalDateInMs = dueDateInMs;
      dueDateInMs += convertHrToMs(numberOfWeekendDays * 24);
      numberOfWeekendDays = countWeekendDays(new Date(acutalDateInMs), new Date(dueDateInMs));
    }
    const timeZoneOffset = new Date(dueDateInMs).getTimezoneOffset();
    return new Date(dueDateInMs - convertMinToMs(timeZoneOffset));
  } else {
    throw new Error('Timestamp and/or turnaround is not valid.');
  }
};

console.log('due date: ', calculateDueDate(new Date('2021-06-17T16:30'), 56));

module.exports = calculateDueDate;
