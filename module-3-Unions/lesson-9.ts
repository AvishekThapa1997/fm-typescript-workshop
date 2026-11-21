class A {
  a: number = 0;
}

class B {
  b: number = 0;
}

class C {
  c: number = 0;
}

class D {
  d: number = 0;
}
type AnyOfThese = A | B | C | D;

function getObject(): AnyOfThese {
  const val = Math.random();

  if (val < 0.3) return new A();
  if (val < 0.6) return new B();
  return new C();
}

const someValue = getObject();

function assertNever(arg: never) {}

function useObject(val: AnyOfThese) {
  if (val instanceof A) {
  } else if (val instanceof B) {
  } else if (val instanceof C) {
  } else if (val instanceof D) {
  } else {
    assertNever(val); // Insist dev to check all types
  }
}

export {};
