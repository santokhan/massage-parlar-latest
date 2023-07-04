function timeChecker(value) {
  let APITimeArray = [
    { time: "11.00" },
    { time: "10.00" },
    { time: "12.00" },
    { time: "14.00" },
  ];

  return APITimeArray.some((e) => e.time === value);
}

console.log(timeChecker("10.00"));
console.log(timeChecker("13.00"));
console.log(timeChecker("11.00"));
