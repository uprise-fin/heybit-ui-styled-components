export function getChildren(
  children: HTMLCollection,
  timer?: number
): PromiseLike<HTMLElement[]> {
  const index = typeof timer === "number" ? ++timer : 0;
  if (children.length === 0 && index < 10) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getChildren(children, index));
      }, 10 * index);
    });
  }
  return new Promise((resolve) =>
    resolve(Array.call(null, ...Array.from(children)) as HTMLElement[])
  );
}
export function getElement<T extends HTMLElement>(
  root: ShadowRoot | null,
  id: string,
  timer?: number
): PromiseLike<T | null | undefined> {
  const index = typeof timer === "number" ? ++timer : 0;
  const element = root?.getElementById(id) as T;
  if (!element && index < 10) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getElement(root, id, index));
      }, 100 * index);
    });
  }
  return new Promise((resolve) => resolve(element));
}
