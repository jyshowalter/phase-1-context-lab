/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(record) {
    return record = {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(record) {
    return record.map((employee) => createEmployeeRecord(employee));
  }

  function createTimeInEvent(time) {
    let [date, hour] = time.split(" ");
    const timeInEvent = {
        type: "TimeIn",
        hour: parseInt(hour),
        date,
    }
    this.timeInEvents.push(timeInEvent);
    return this;
}

function createTimeOutEvent(time) {
    let [date, hour] = time.split(" ");
    const timeOutEvent = {
        type: "TimeOut",
        hour: parseInt(hour),
        date,
    }
    this.timeOutEvents.push(timeOutEvent);
    return this;
}

function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(e => e.date === date);
    const timeOutEvent = this.timeOutEvents.find(e => e.date === date);

    const startingHour = timeInEvent.hour;
    const endingHour = timeOutEvent.hour;
    return (endingHour - startingHour)/100;
}

function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    const payRate = this.payPerHour;
    const wagesEarned = hoursWorked * payRate;
    return wagesEarned;
}

function findEmployeeByFirstName (srcArray, firstName) {
    return srcArray.find((employee) => employee.firstName === firstName);
}

function calculatePayroll(record) {
    let totalPayroll = 0; 
    record.forEach((employee) => {
        totalPayroll += allWagesFor.call(employee);
    })
    return totalPayroll;
}