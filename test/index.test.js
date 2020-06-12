import { sum, sum2, sum3 } from '../src/index';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum2(1, 2)).toBe(3);
});

test('subs 5 - 2 to equal 3', () => {
    expect(sum3(5, 2)).toBe(3);
});
