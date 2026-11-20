// this will filter anything ...
function filter<T>(array: T[], test: (value: T) => boolean): T[] {
  const result: T[] = [];

  for (const val of array) {
    if (test(val)) {
      result.push(val);
    }
  }

  return result;
}

const nums = [1, 2, 4, 13, 19, 20, 21];
const evemNumbers = filter<number>(nums, num => num % 2 === 0);
console.log(evemNumbers);

// filter numbers

// ... and now strings

export {};
