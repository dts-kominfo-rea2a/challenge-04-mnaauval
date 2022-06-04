// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (arrDates, position) => {
  let arrHasil = [];
  if (position !== undefined) {
    for (let index = 0; index < arrDates.length; index++) {
      arrHasil.push(Date.parse(arrDates[index]));
    }
    return arrHasil[position].toString().slice(0, 10);
  } else {
    for (let index = 0; index < arrDates.length; index++) {
      arrHasil.push(Date.parse(arrDates[index]).toString().slice(0, 10));
    }
    return arrHasil.sort().join("-");
  }
};

// createDate(dates);

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
