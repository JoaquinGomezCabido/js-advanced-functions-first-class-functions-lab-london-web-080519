// Code your solution in this file!

const returnFirstTwoDrivers = driversArray => {
  return driversArray.slice(0, 2);
};

const returnLastTwoDrivers = driverArray => {
  return driverArray.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
  return function(fare) {
    return fare * number;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, work) {
  return work(driversArray);
}
