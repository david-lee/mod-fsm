import { describe, expect, test } from 'vitest';
import { createModFSM } from '../src/createModFSM';
import modThreeMock from './mockData/modThree-fsm.json';
import modFourMock from './mockData/modFour-fsm.json';

describe('modulo three FSM', () => {
  const {
    states,
    inputAlphabet,
    initState,
    finalStates,
    transitions,
    finalStateToOutput,
  } = modThreeMock;

  test.each([
    ['110', 0],
    ['1010', 1],
    ['1110', 2],
  ])('input %s --> %i', (input, remainder) => {
    const fsm = createModFSM({
      states,
      inputAlphabet,
      initState,
      finalStates,
      transitions,
      finalStateToOutput,
    });

    expect(fsm(input)).toBe(remainder);
  });
});

describe('modulo four FSM', () => {
  const {
    states,
    inputAlphabet,
    initState,
    finalStates,
    transitions,
    finalStateToOutput,
  } = modFourMock;

  test.each([
    ['1100', 0],
    ['1101', 1],
    ['1010', 2],
    ['1011', 3],
  ])('input %s --> %i', (input, remainder) => {
    const fsm = createModFSM({
      states,
      inputAlphabet,
      initState,
      finalStates,
      transitions,
      finalStateToOutput,
    });

    expect(fsm(input)).toBe(remainder);
  });
});
