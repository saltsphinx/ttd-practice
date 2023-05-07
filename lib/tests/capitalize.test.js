import jest from "jest";
import capitalize from "../capitalize";

test('Capitalizes the first letter of a string', () => {
  expect(capitalize('hello, world!')).toBe('Hello, world!');
  expect(capitalize('fooBar')).toBe('FooBar');
});