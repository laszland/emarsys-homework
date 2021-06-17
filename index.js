import {
  convertHrToMs,
  isDateValid,
  isTurnAroundValid,
  isOutOFWorkingTime,
  HRS_BETWEEN_END_TO_START,
  countWeekendDays,
  convertMinToMs
} from './service.js'

function calculateDueDate (date, turnAround) {
  if (isDateValid(date) && isTurnAroundValid(turnAround)) {
    const numberOfDays = Math.floor(turnAround / 8)
    const numberOfHours = Math.floor(turnAround - (numberOfDays * 8))
    let dueDateInMs = date.getTime() + convertHrToMs(numberOfHours) + convertHrToMs(numberOfDays * 24);
    if(isOutOFWorkingTime(new Date(dueDateInMs))) {
      dueDateInMs += convertHrToMs(HRS_BETWEEN_END_TO_START)
    }
    let numberOfWeekendDays = countWeekendDays(date, new Date(dueDateInMs));
    console.log('before while', numberOfWeekendDays)
    while (numberOfWeekendDays > 0) {
      console.log(numberOfWeekendDays)
      let acutalDateInMs = dueDateInMs;
      dueDateInMs += convertHrToMs(numberOfWeekendDays * 24);
      console.log(new Date(dueDateInMs))
      numberOfWeekendDays = countWeekendDays(new Date(acutalDateInMs), new Date(dueDateInMs))
    }
    const timeZoneOffset = new Date(dueDateInMs).getTimezoneOffset();
    return new Date(dueDateInMs - convertMinToMs(timeZoneOffset));
  } else {
    throw new Error("Timestamp and/or turnaround is not valid.")
  }
}

console.log('due date: ', calculateDueDate(new Date('2021-06-17T11:13'), 56));