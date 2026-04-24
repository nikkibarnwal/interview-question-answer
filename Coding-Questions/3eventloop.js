// console.log("A");

// process.nextTick(() => console.log("B"));

// Promise.resolve().then(() => console.log("C"));

// (async () => {
//   console.log("D");
//   await null;
//   console.log("E");
// })();

// console.log("F");

setTimeout(() => console.log("T1"), 0);

console.log("S");

(async () => {
  await null;
  console.log("A1");
})();

Promise.resolve().then(() => {
  console.log("P1");
  return Promise.resolve().then(() => console.log("P2"));
});
