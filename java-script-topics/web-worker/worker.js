// Heavy calculation - 1 to 100000000 sum
let total = 0;
for (let i = 1; i <= 100000000; i++) {
  total += i;
}
postMessage(total); // Send result back to main thread
console.log("Total sum from worker:", total);
