import jest from 'jest';
import cipher from '../caesarCipher';

test('shifts phrase forward 1', () => {
  expect(cipher('Hello, world!', 1)).toBe('Ifmmp, xpsme!');
  expect(cipher("Chicken's shit", 1)).toBe("Dijdlfo't tiju");
});

test('shifts phrase back 1', () => {
  expect(cipher('Hello, world!', -1)).toBe('Gdkkn, vnqkc!');
  expect(cipher("Chicken's shit", -1)).toBe('Bghbjdm\'r rghs');
});

test('shifts phrase 5 forward', () => {
  expect(cipher('Hello, world!', 5)).toBe('Mjqqt, btwqi!');
  expect(cipher("Chicken's shit", 5)).toBe("Hmnhpjs\'x xmny");
});

test('Wraps a to z and z to a', () => {
  expect(cipher('ab', -1)).toBe('za');
  expect(cipher('yz', 1)).toBe('za');
});

test('Doesn\'t wrap non alphabet characters', () => {
  expect(cipher('15', 1)).toBe('15');
  expect(cipher('@', 1)).toBe('@');
});