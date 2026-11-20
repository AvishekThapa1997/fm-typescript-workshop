import { Expect, TypesMatch } from "../util/test-utils";

type LoadingPacket<T extends unknown[]> = {
  // args here -->
  load: (...args: T) => Promise<unknown>;
  // should match this return val                     -->
  getPrefetchArgs: (cookies: Record<string, unknown>) => [...T];
  // and also these args -->
  getPrefetchUrl: (...args: T) => string;
};

type Loader<T extends unknown[]> = {
  load: (...args: T) => Promise<T>;
};

function createPrefetchLoader<T extends unknown[]>(
  packet: LoadingPacket<T>,
): Loader<T> {
  return null as any;
}

const loader = createPrefetchLoader({
  load(page: number, search: string) {
    return fetch(`/some/endpoint?page=${page}&search=${search}`);
  },
  getPrefetchArgs(cookies: Record<string, unknown>) {
    const page: number = (cookies.page as number) || 1;
    const search: string = (cookies.search as string) || "";

    return [page, search];
  },
  getPrefetchUrl(page: number, search: string) {
    return `/some/endpoint?page=${page}&search=${search}`;
  },
});

type Tests = [
  Expect<TypesMatch<Parameters<typeof loader.load>, [number, string]>>,
];

loader.load(1, "Hello");

// @ts-expect-error
loader.load(1);

// @ts-expect-error
loader.load(1, "Hello", null as any);

export {};
