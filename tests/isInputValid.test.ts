import { expect, test } from 'vitest';
import { isInputValid } from '../src/isInputValid';

test('input "" should be matched', () => {
  expect(isInputValid('')).toBeTruthy();
});

test('input "0" should be matched', () => {
  expect(isInputValid('0')).toBeTruthy();
});

test('input "01" should be matched', () => {
  expect(isInputValid('01')).toBeTruthy();
});

test('input "11" should be matched', () => {
  expect(isInputValid('11')).toBeTruthy();
});

test('input "110" should be matched', () => {
  expect(isInputValid('110')).toBeTruthy();
});

test('input "101" should be matched', () => {
  expect(isInputValid('101')).toBeTruthy();
});

test('input "11x" should not be matched', () => {
  expect(isInputValid('11x')).toBeFalsy();
});

test('input "x11" should not be matched', () => {
  expect(isInputValid('x11')).toBeFalsy();
});
