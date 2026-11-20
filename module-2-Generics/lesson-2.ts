class Foo<P1, P2> {
  property1?: P1;
  property2?: P2;

  constructor(p1: P1, p2: P2) {
    this.property1 = p1;
    this.property2 = p2;
  }
}

export {};

const foo = new Foo<number, string>(2, "s");
