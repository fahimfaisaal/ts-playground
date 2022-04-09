console.clear();

const numbers: number[] = [1, 2, 3, 4, 5]; // can also use generics like Array<number>
const names: Array<string> = ["fahim", "faisal", "soikot"];
const tuple: [string, boolean] = ["active", true]; // it's like tuple

// enums
enum Units {
  PX,
  PC,
  VW,
  VH,
}

console.log(Units.PC, Units.VH, Units.VW);

// enums with key value via number

enum Times {
  SECOND = 1,
  MINUTE = SECOND * 60,
  HOUR = MINUTE * 60,
  DAY = HOUR * 24,
  YEAR = DAY * 360,
}

// we can access the all values via keys
console.log(`----------
Enums:
by key -> ${Times.SECOND} ${Times.MINUTE} ${Times.HOUR} ${Times.DAY}
by value -> ${Times[1]} ${Times[60]} ${Times[3600]} ${Times[86400]}
----------`);
// also we can access the the key with the help of value

// type assertion
const string: any = "1";
const myString: number = <number>string; // or we can use as operator

// interfaces
interface User {
  readonly id?: string; // for constant & optional parameter
  name: string;
  age: number;
  isRegistered: boolean;
}

const p1: User = {
  id: "jshdf88sd",
  name: "fahim faisal",
  age: 23,
  isRegistered: true,
};

// p1.id = '345456sifhsdu' this will be an error cause id is a readonly mean constant key
// interface can inherit another interface
interface SuperUser extends User {
  location: {
    state: string;
    city: string;
    postalCode: number;
  };
}

const p2: SuperUser = {
  name: "soikot",
  age: 45,
  isRegistered: true,
  location: {
    state: "Banladesh",
    city: "Rajshahi",
    postalCode: 6500,
  },
};

// p2.id = 'sjkdfsj5' here it's follow the previous condition

// dynamic objects
interface Occurrences<T> {
  object: {
    [key: string | number]: number;
  };
  map: Map<T, number>; //  also use map with generics
}

// functions
type StringConversion = (str: string) => string;
const capitalize: StringConversion = ([firstChar, ...remainChars]: string) =>
  `${firstChar.toUpperCase()}${remainChars.join("").toLowerCase()}`;

const greet: string = "hello, there";
console.log(capitalize(greet));

//  use of generics
type Callback = <T>(value: T, index: number, array: Array<T>) => any;

const map = <T>(arr: Array<T>, cb: Callback): Array<any> => {
  const modifiedArr: Array<any> = [];

  for (let i = 0; i < arr.length; i++) {
    modifiedArr.push(cb<T>(arr[i], i, arr));
  }

  return modifiedArr;
};

console.log(map<number>(numbers, (value) => String(<any>value * 2)));
