export function getChildren(children, timer) {
    const index = typeof timer === "number" ? ++timer : 0;
    if (children.length === 0 && index < 10) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(getChildren(children, index));
            }, 10 * index);
        });
    }
    return new Promise((resolve) => resolve(Array.call(null, ...children)));
}
export function getElement(root, id, timer) {
    const index = typeof timer === "number" ? ++timer : 0;
    const element = root === null || root === void 0 ? void 0 : root.getElementById(id);
    if (!element && index < 10) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(getElement(root, id, index));
            }, 100 * index);
        });
    }
    return new Promise((resolve) => resolve(element));
}
//# sourceMappingURL=utils.js.map