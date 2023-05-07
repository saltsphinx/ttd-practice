import jest from 'jest';
import reverseString from '../reverseString';

test("Takes string and reverses it.", () => {
  expect(reverseString('Hello, world!')).toBe('!dlrow ,olleH');
});