import { expect, test } from 'vitest';
import { handleTransitions } from '../src/handleTransitions';
import modThreeMock from './mockData/modThree-fsm.json';

test.each([
  ['110', 's0'],
  ['1010', 's1'],
])('input %s --> final state %s', (input, finalState) => {
  const { initState, inputAlphabet, transitions } = modThreeMock;

  const lastState = handleTransitions(
    input,
    initState,
    inputAlphabet,
    transitions
  );

  expect(lastState).toBe(finalState);
});

test('return an error for wrong input 112', () => {
  const { initState, inputAlphabet, transitions } = modThreeMock;

  expect(() =>
    handleTransitions('112', initState, inputAlphabet, transitions)
  ).toThrowError('Input symbol 2 is not valid');
});

test('return an error for an undefined transition', () => {
  const { initState, inputAlphabet } = modThreeMock;

  expect(() =>
    handleTransitions('100', initState, inputAlphabet, {
      s0: { '0': 's0', '1': 's1' },
      s1: { '0': 's2', '1': 's0' },
    })
  ).toThrowError('Transition is not defined for state s2');
});
