const calculateDueDate = require('./index');

test('function throws an error if any of the inputs is not valid', () => {
  expect(() => calculateDueDate('asasd', 3)).toThrow('Timestamp and/or turnaround is not valid.');
  expect(() => calculateDueDate('2021-06-18T10:11', 2.6)).toThrow('Timestamp and/or turnaround is not valid.');
  expect(() => calculateDueDate(123456789, 'asd')).toThrow('Timestamp and/or turnaround is not valid.');
});

test('function returns the correct due date', () => {
  expect(calculateDueDate(new Date('2021-06-17T16:30'), 3).toString()).toBe(new Date('2021-06-18T11:30:00.000Z').toString())
  expect(calculateDueDate(new Date('2021-06-16T10:30'), 3).toString()).toBe(new Date('2021-06-16T13:30:00.000Z').toString())
  expect(calculateDueDate(new Date('2021-06-17T16:30'), 18).toString()).toBe(new Date('2021-06-21T10:30:00.000Z').toString())
  expect(calculateDueDate(new Date('2021-06-17T16:30'), 56).toString()).toBe(new Date('2021-06-28T16:30:00.000Z').toString())
})