function tricky() {
  console.log("1: start");
  setTimeout(() => console.log("2: timeout"), 0);
  Promise.resolve()
    .then(() => console.log("3: promise then"))
    .then(() => {
      console.log("4: chained then");
      return Promise.resolve();
    })
    .then(() => console.log("5: final then"));
  process.nextTick(() => console.log("6: nextTick"));
  (async function () {
    console.log("7: async start");
    await null;
    console.log("8: after await");
  })();
  console.log("9: end");
}
tricky();

function test1() {
  console.log("1: start");

  setTimeout(() => console.log("2: setTimeout"), 0);
  setImmediate(() => console.log("3: setImmediate"));

  process.nextTick(() => console.log("4: nextTick"));

  Promise.resolve().then(() => console.log("5: promise"));

  console.log("6: end");
}
test1();

// o/p
// 1: start
// 6: end
// 4: nextTick
// 5: promise
// 2: setTimeout
// 3: setImmediate

// why this output?

// Explanation:
// 1. Synchronous code runs first: "1: start" and "6: end".
// 2. process.nextTick() callbacks run next, before Promises: "4: nextTick".
// 3. Promise callbacks run after nextTick: "5: promise".
// 4. setTimeout() and setImmediate() are both macrotasks, but setTimeout() is scheduled to run first in this case: "2: setTimeout".
// 5. Finally, setImmediate() runs: "3: setImmediate".

async function test2() {
  console.log("1: async start");

  process.nextTick(() => console.log("2: nextTick"));

  await Promise.resolve();
  console.log("3: after await");

  setTimeout(() => console.log("4: timeout"), 0);
}
test2();
console.log("5: outside async");

// o/p
// 1: async start
// 5: outside async
// 2: nextTick
// 3: after await
// 4: timeout

function test3() {
  process.nextTick(() => {
    console.log("1: first tick");
    process.nextTick(() => {
      console.log("2: nested tick");
    });
  });

  Promise.resolve().then(() => console.log("3: promise"));

  console.log("4: end");
}
test3();

// o/p
// 4: end
// 1: first tick
// 2: nested tick
// 3: promise

(async function test4() {
  console.log("1: start");

  setTimeout(() => console.log("2: timeout"), 0);
  setImmediate(() => console.log("3: immediate"));

  await Promise.resolve();
  console.log("4: after await");

  process.nextTick(() => console.log("5: nextTick"));

  console.log("6: end");
})();

// o/p
// 1: start
// 4: after await
// 6: end
// 5: nextTick
// 2: timeout
// 3: immediate
