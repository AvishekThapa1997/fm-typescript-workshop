const arr = [1, 2, 3, "a", "b"];

arr
  .filter(x => typeof x === "number")
  // can add numbers only (as far as TS is concerned)
  .map(x => x + 1);

export {};
