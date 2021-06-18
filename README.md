# HomeWork
## László Roland Kiss
##### Junior Full-Stack Developer

This project is made as a part of the recruitment process of Emarsys-Technologies Kft.

### The Problem
We are looking for a solution that implements a due date calculator in an issue tracking system. Your task is to implement the CalculateDueDate method:
* Input: Takes the submit date/time and turnaround time.
* Output: Returns the date/time when the issue is resolved.

### Rules
* Working hours are from 9AM to 5PM on every working day, Monday to Friday.
* Holidays should be ignored (e.g. A holiday on a Thursday is considered as a working day. A working Saturday counts as a non-working day.).
* The turnaround time is defined in working hours (e.g. 2 days equal 16 hours). If a problem was reported at 2:12PM on Tuesday and the turnaround time is 16 hours, then it is due by 2:12PM on Thursday.
* A problem can only be reported during working hours. (e.g. All submit date values are set between 9AM to 5PM.)
* Do not use any third-party libraries for date/time calculations (e.g. Moment.js, Carbon, Joda, etc.) or hidden functionalities of the built-in methods.

### How to use the solution
1. To run this program and its test, you need to have `Node.js` installed on your computer.
2. Download or clone this repository.
3. Open your CLI and navigate to the directory. Run `npm install` command.
4. To see the result of the `calculateDueDate` function, you can run `node index.js`.
5. To run all test cases, please use the `npm run test` command. If you want to run tests automatically at every change, use the `npm run test:watch` command.

### Used technologies
**JavaScript** - as programming language.

**Node.js** - to run JavaScript in a non-DOM envirionment.

**npm** - to manage packages.

**Jest** - testing library for JS.

**Semistandard** - linting JS code. I like using semicolons.

### Limitations
The function assumes, that the date of creation is a Date object. It can not handle string or any other input type.

`turnAround` has to be a positive integer, the functions can not handle floats. 

The service functions don't make any check of type. 

The `calculateDueDate` only throws an error but does not handle it. I assumed that error handling will be placed outside of the function's scope.

For the `countWeekendDays` function I used this [Stackoverflow answer](https://stackoverflow.com/questions/6210906/how-to-determine-number-saturdays-and-sundays-comes-between-two-dates-in-java-sc) as a base.

### Personal notes
First of all, thank you for the homework, I enjoyed working on it. Regardless of the outcome of the recruitment process, I hope you will have the capacity to offer me some constructive feedback. I'm just curious.

I organized all my helping functions into a `service.js` file to keep `calculateDueDate` clean and easy to read.

I'm proud of two things.
Firstly, I found the solution for date arithmetic using the UTC. That helped a lot to manage the out-of-working-time situations.
Secondly, for a short time, I constantly had a bug: the calculation
of the due time gave two hours less result than it should be. My first assumption that it has to do with time zones, seemed to be the correct question. So finding `getTimezoneOffset` as a solution was easy.
