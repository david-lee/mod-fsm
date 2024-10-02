import { expect, test } from 'vitest';
import { createModFSM } from '../src/createModFSM';

const states = ['S0', 'S1', 'S3'];
const inputAlphabet = ['0', '1'];
const initState = 'S0';
const finalState = ['S0', 'S1', 'S3'];
const transitions = {
  S0: { '0': 'S0', '1': 'S1' },
  S1: { '0': 'S2', '1': 'S0' },
  S2: { '0': 'S1', '1': 'S2' },
};

test('return an error with an invalid init state s4', () => {
  expect(() =>
    createModFSM(states, inputAlphabet, 'S4', finalState)
  ).toThrowError(`initState S4 is not an element of the states`);
});

test('return an error with an invalid final state ["S1", "S4"]', () => {
  expect(() =>
    createModFSM(states, inputAlphabet, initState, ['S1', 'S5'])
  ).toThrowError(`finalState S5 is not subset of the states`);
});

test('return an error with an invalid input string: "112"', () => {
  const fsm = createModFSM(states, inputAlphabet, initState, finalState);

  expect(() => fsm.run('112')).toThrowError('input 112 is not valid.');
});

test('return a correct remainder 0 : "110"', () => {
  const fsm = createModFSM(
    states,
    inputAlphabet,
    initState,
    finalState,
    transitions
  );

  expect(fsm.run('110')).toBe(0);
});

test('return a correct remainder 1 : "1010"', () => {
  const fsm = createModFSM(
    states,
    inputAlphabet,
    initState,
    finalState,
    transitions
  );

  expect(fsm.run('1010')).toBe(1);
});
