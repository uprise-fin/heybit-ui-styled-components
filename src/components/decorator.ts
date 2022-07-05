// import { LitElement } from "lit";
// import { getChildren, getElement } from "../utils";

function scss() {
  return function (
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log(target, propertyKey, descriptor);
  };
}
export {scss};
