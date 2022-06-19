/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
const createEmployeeRecord = (passedArray) => {
  return {
    firstName: passedArray[0],
    familyName: passedArray[1],
    title: passedArray[2],
    payPerHour: passedArray[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};

const createEmployeeRecords = (employeePassed) => {
  return employeePassed.map((passedArray) => createEmployeeRecord(passedArray));
};

let createTimeInEvent = function (passedDate) {
  let [date, hour] = passedDate.split(" ");

  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  });

  return this;
};

let createTimeOutEvent = function (passedDate) {
  let [date, hour] = passedDate.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
  });

  return this;
};

let hoursWorkedOnDate = function (passedDate) {
  let inEvent = this.timeInEvents.find((e) => e.date === passedDate);

  let outEvent = this.timeOutEvents.find((e) => e.date === passedDate);

  return (outEvent.hour - inEvent.hour) / 100;
};

let wagesEarnedOnDate = function (passedDate) {
  let rawWage = hoursWorkedOnDate.call(this, passedDate) * this.payPerHour;
  return parseFloat(rawWage.toString());
};

let findEmployeeByFirstName = function (passedArray, firstName) {
  return passedArray.find((record) => record.firstName === firstName);
};

let calculatePayroll = function (arrayOfEmployeeRecords) {
  return arrayOfEmployeeRecords.reduce((memo, record) => {
    return memo + allWagesFor.call(record);
  }, 0);
};

let allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map((e) => e.date);

  let payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!;

  return payable;
};
