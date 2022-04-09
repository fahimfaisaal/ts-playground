"use strict";
console.clear();
const numbers = [1, 2, 3, 4, 5]; // can also use generics like Array<number>
const names = ["fahim", "faisal", "soikot"];
const tuple = ["active", true]; // it's like tuple
// enums
var Units;
(function (Units) {
    Units[Units["PX"] = 0] = "PX";
    Units[Units["PC"] = 1] = "PC";
    Units[Units["VW"] = 2] = "VW";
    Units[Units["VH"] = 3] = "VH";
})(Units || (Units = {}));
console.log(Units.PC, Units.VH, Units.VW);
// enums with key value via number
var Times;
(function (Times) {
    Times[Times["SECOND"] = 1] = "SECOND";
    Times[Times["MINUTE"] = 60] = "MINUTE";
    Times[Times["HOUR"] = 3600] = "HOUR";
    Times[Times["DAY"] = 86400] = "DAY";
    Times[Times["YEAR"] = 31104000] = "YEAR";
})(Times || (Times = {}));
// we can access the all values via keys
console.log(`----------
Enums:
by key -> ${Times.SECOND} ${Times.MINUTE} ${Times.HOUR} ${Times.DAY}
by value -> ${Times[1]} ${Times[60]} ${Times[3600]} ${Times[86400]}
----------`);
// also we can access the the key with the help of value
// type assertion
const string = "1";
const myString = string; // or we can use as operator
const p1 = {
    id: "jshdf88sd",
    name: "fahim faisal",
    age: 23,
    isRegistered: true,
};
const p2 = {
    name: "soikot",
    age: 45,
    isRegistered: true,
    location: {
        state: "Banladesh",
        city: "Rajshahi",
        postalCode: 6500,
    },
};
const capitalize = ([firstChar, ...remainChars]) => `${firstChar.toUpperCase()}${remainChars.join("").toLowerCase()}`;
const greet = "hello, there";
console.log(capitalize(greet));
const map = (arr, cb) => {
    const modifiedArr = [];
    for (let i = 0; i < arr.length; i++) {
        modifiedArr.push(cb(arr[i], i, arr));
    }
    return modifiedArr;
};
console.log(map(numbers, (value) => String(value * 2)));
