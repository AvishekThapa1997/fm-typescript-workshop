type Cat = {
  name: string;
  whiskers: number;
  feral: boolean;

  TYPE: "CAT";
};

type Dog = {
  name: string;
  obedient: boolean;

  TYPE: "DOG";
};

type AnyAnimal = Cat | Dog;

function getAnimal(): AnyAnimal {
  const val = Math.random();
  if (val < 0.5) {
    return { name: "Muffin", whiskers: 12, feral: true, TYPE: "CAT" };
  }
  return { name: "Rex", obedient: true, TYPE: "DOG" };
}

const animal: AnyAnimal = getAnimal();

const assertNever = (arg: never) => {};

function dealWithAnimal(animal: AnyAnimal) {
  switch (animal.TYPE) {
    case "CAT":
      animal.name;
      break;
    case "DOG":
      animal.obedient;
      break;
    default:
      assertNever(animal);
  }
}

export {};
