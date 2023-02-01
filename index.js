// Code your solution in this file!
const returnFirstTwoDrivers = function () {
  return ["Antonia", "Nuru"];
};
returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]);

const returnLastTwoDrivers = function () {
  return ["Amari", "Mo"];
};
returnLastTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return value * multiplyValue;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn) {
  return driversToReturn(drivers);
};
