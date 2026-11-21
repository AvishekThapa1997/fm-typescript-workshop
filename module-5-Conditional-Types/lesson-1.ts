// Conditional types

// Inferring types

type UseLess = Array<number> extends object ? true : false;

type IsArray<T> = T extends Array<unknown> ? true : false;

type A = IsArray<number[]>;
type B = IsArray<number>;

type ArrayOfWhat<T extends Array<unknown>> =
  T extends Array<infer U> ? U : never;

type NumberResult = ArrayOfWhat<number[]>;

type FirstItemInArray<T extends Array<any>> = T extends [
  infer First,
  ...infer Rest,
]
  ? First
  : never;

type LastItemInArray<T extends Array<any>> = T extends [
  ...infer Rest,
  infer Last,
]
  ? Last
  : never;
type a = LastItemInArray<[1, 2, 4]>;
export {};
