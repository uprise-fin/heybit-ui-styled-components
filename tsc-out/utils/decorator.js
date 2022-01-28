function scss() {
    console.log('first(): factory evaluated');
    return function (target, propertyKey, descriptor) {
        console.log(target, propertyKey, descriptor);
    };
}
export { scss };
//# sourceMappingURL=decorator.js.map