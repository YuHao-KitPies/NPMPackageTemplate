class A {
    public static sub(a: number, b: number): number {
        return a - b;
    }
}
function printName(): string {
    return 'HHH';
}
export function printName1(): string {
    return 'HHH';
}
export default A;
exports.AA = A;
export { printName };
