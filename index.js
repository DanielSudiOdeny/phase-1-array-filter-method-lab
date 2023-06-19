const findMatching = function (drivers, string) {
  const matchingList = drivers.filter(function (driver) {
    return driver.toLowerCase() === string.toLowerCase();
  });
  return matchingList;
};

const fuzzyMatch = function (drivers, string) {
  const providedLettersMatch = drivers.filter(function (driver) {
    return driver.slice(0, 2) === string;
  });

  return providedLettersMatch;
};

const matchName = function (drivers, string) {
  const matchingNames = drivers.filter(function (driver) {
    return driver["name"] === string;
  });

  return matchingNames;
};
