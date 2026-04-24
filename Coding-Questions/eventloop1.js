console.log("X");

setImmediate(() => {
  console.log("I1");
  process.nextTick(() => console.log("N2"));
});

process.nextTick(() => console.log("N1"));

Promise.resolve().then(() => {
  console.log("P1");
  setImmediate(() => console.log("I2"));
});

console.log("Y");
