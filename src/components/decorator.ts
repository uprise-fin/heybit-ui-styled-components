function scss() {
  console.log('first(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target, propertyKey, descriptor);
  };
}
export {scss};
