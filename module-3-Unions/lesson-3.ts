type Cat = {
  name: string;
  whiskers: number;
  feral: boolean;
  TYPE: Uppercase<"cat">;
};

type Dog = {
  name: string;
  obedient: boolean;
  TYPE: Uppercase<"dog">;
};

let animal: Cat | Dog = {} as any;
// animal

function dealWithCatOrDog(animal: Cat | Dog) {
  if ("whiskers" in animal) {
    // here animal type is Cat
    animal;
  } else {
    // here animal type is Dog
    animal;
  }
}

function dealWithCatOrDog2(animal: Cat | Dog) {
  if (animal.TYPE === "CAT") {
    // here animal type is Cat
    animal;
  } else {
    // here animal type is Dog
    animal;
  }
}

let randomeObj = {
  name: "Muffin",
  whiskers: 12,
  feral: false,
  TYPE: "CAT",
} as const;

let cat: Cat;

cat = randomeObj;

export {};
