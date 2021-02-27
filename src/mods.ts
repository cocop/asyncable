export type Asyncable<Result> = Result | Promise<Result>;

export async function async<Result>(value: Asyncable<Result>): Promise<Result> {
  if (value instanceof Promise) {
    await value;
  }
  return value;
}
