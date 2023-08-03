import { addDays } from "date-fns";

const today = Date.now();
console.log(addDays(today, 10));

const a = [1, 2, 3];
const b = [4, 5, 6];

a /*? $[1]*/.concat(b);

a; //?

b.concat(a);

b.forEach((n) => console.log(n)); //?.

a.forEach((n) => {
  n; //?.
});
