import jest from 'jest';
import analyseArray from '../analyzeArray';

test('calculates average of 5 numbers', () => {
  expect(analyseArray([4, 8, 8, 1, 6])).toHaveProperty('average', 5);
});

test('calculates average of 4 numbers', () => {
  expect(analyseArray([4, 8, 1, 1])).toHaveProperty('average', 3);
});

test('finds min in array of 5', () => {
  expect(analyseArray([5, 8, 16, 2, 5, 5, 7])).toHaveProperty('min', 2);
});