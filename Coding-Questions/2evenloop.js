(async () => {
  console.log("A");
  await Promise.resolve();
  console.log("B");

  Promise.resolve().then(() => console.log("C"));

  await null;
  console.log("D");
})();

async function evenLoop() {
  console.log("A");
  await Promise.resolve();
  console.log("B");

  Promise.resolve().then(() => console.log("C"));

  await null;
  console.log("D");
}

Promise.resolve().then(() => console.log("E"));

console.log("F");

// F
// E
// A
// B
// C
// D

// A
// F
// B
// E
// C
// D

// Sync-> processnextTick->microtask->macrotask

// micortask - Promise.then, async/await
// macrotask - setImmediate,  setTimeout, setInterval
