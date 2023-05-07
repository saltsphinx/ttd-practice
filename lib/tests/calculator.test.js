import jest from 'jest';
import calculator from '../calculator';

const calc = calculator();

test('has basic operations', () => {
  expect(calc).toHaveProperty('divide');
  expect(calc).toHaveProperty('multiply');
  expect(calc).toHaveProperty('minus');
  expect(calc).toHaveProperty('add');
});

test('adds 2 numbers', () => {
  expect(calc.add(2, 6)).toBe(8);
  expect(calc.add(5, 9)).toBe(14);
});

test('subtracts 2 numbers', () => {
  expect(calc.minus(2, 6)).toBe(-4);
  expect(calc.minus(9, 5)).toBe(4);
});

test('multiplies 2 numbers', () => {
  expect(calc.multiply(2, 6)).toBe(12);
  expect(calc.multiply(5, 9)).toBe(45);
});

test('divides 2 numbers', () => {
  expect(calc.divide(6, 2)).toBe(3);
  expect(calc.divide(5, 9)).toBeCloseTo(0.55, 1);
});