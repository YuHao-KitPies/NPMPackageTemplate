function add(a: number, b: number): number {
    return a + b;
}

const v = [1, 2, 3, 4, 5, 6].reduce(add);
console.log(v);