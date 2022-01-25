export const getChildren = (
  children: HTMLCollection,
  timer?: number
): PromiseLike<HTMLElement[]> => {
  const index = timer ? ++timer : 0;
  if (children.length === 0 && index < 10) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getChildren(children, index));
      }, 10 * index);
    });
  }
  return new Promise((resolve) =>
    resolve(Array.call(null, ...children) as HTMLElement[])
  );
};
