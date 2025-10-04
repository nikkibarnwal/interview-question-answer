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
