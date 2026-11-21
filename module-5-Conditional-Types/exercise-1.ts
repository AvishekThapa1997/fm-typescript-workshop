type GetReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

type GetParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

type NumberResult = GetReturnType<() => Promise<number>>;

type StringTuple = GetParameters<(a: string, b: number) => void>;
