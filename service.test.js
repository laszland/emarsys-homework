const {
  convertHrToMs,
  convertMinToMs,
  isOutOFWorkingTime,
  isDateValid,
  isTurnAroundValid,
  countWeekendDays
} = require('./service')

test('convert 1 hr equal to 3600000', () => {
  expect(convertHrToMs(1)).toEqual(3600000);
});

test('convert 1 min equal to 60000', () => {
  expect(convertMinToMs(1)).toEqual(60000);
});

test('isOutOfWorkingTime give true to weekend', () => {
  expect(isOutOFWorkingTime(new Date('2021-06-19'))).toBeTruthy();
  expect(isOutOFWorkingTime(new Date('2021-06-18T10:35'))).toBeFalsy();
});

test('isDateValid returns false on string or if date is out of working time', () => {
  expect(isDateValid('asdasd')).toBeFalsy();
  expect(isDateValid(new Date('2021-06-18T07:00'))).toBeFalsy();
  expect(isDateValid(new Date('2021-06-18T22:00'))).toBeFalsy();
});

test('isTurnAroundValid returns true on positive integer, false in any other cases', () => {
  expect(isTurnAroundValid(3)).toBeTruthy();
  expect(isTurnAroundValid()).toBeFalsy();
  expect(isTurnAroundValid('asdasd')).toBeFalsy();
  expect(isTurnAroundValid(1.2)).toBeFalsy();
  expect(isTurnAroundValid(0)).toBeFalsy();
  expect(isTurnAroundValid(3.0)).toBeTruthy();
})

test('countWeekendDays returns a number of weekend days between two dates (starting date not included', () => {
  expect(countWeekendDays(new Date('2021-06-16'), new Date('2021-06-21'))).toEqual(2);
  expect(countWeekendDays(new Date('2021-06-19'), new Date('2021-06-20'))).toEqual(1);
})