import { describe, expect, test } from 'vitest';
import { createModFSM } from '../src/createModFSM';

const inputAlphabet = ['0', '1'];

describe('modulo three FSM', () => {
  const states = ['S0', 'S1', 'S2'];
  const initState = 'S0';
  const finalStates = ['S0', 'S1', 'S2'];
  const transitions = {
    S0: { '0': 'S0', '1': 'S1' },
    S1: { '0': 'S2', '1': 'S0' },
    S2: { '0': 'S1', '1': 'S2' },
  };
  const finalStateToOutput = {
    S0: 0,
    S1: 1,
    S2: 2,
  };

  test('return an error with an invalid init state S4', () => {
    expect(() =>
      createModFSM({
        states,
        inputAlphabet,
        initState: 'S4',
        finalStates,
        finalStateToOutput,
      })
    ).toThrowError(`initState S4 is not an element of the states`);
  });

  test('return an error with an invalid final state ["S1", "S4"]', () => {
    expect(() =>
      createModFSM({
        states,
        inputAlphabet,
        initState,
        finalStates: ['S1', 'S5'],
        finalStateToOutput,
      })
    ).toThrowError(`finalState S5 is not subset of the states`);
  });

  test('return an error with an invalid input string: "112"', () => {
    const fsm = createModFSM({
      states,
      inputAlphabet,
      initState,
      finalStates,
      transitions,
      finalStateToOutput,
    });

    expect(() => fsm('112')).toThrowError('Input symbol 2 is not valid.');
  });

  test('undefined transition 110', () => {
    const fsm = createModFSM({
      states,
      inputAlphabet,
      initState,
      finalStates,
      transitions: {
        S0: { '0': 'S0', '1': 'S1' },
        S1: { '0': 'S2', '1': 'S0' },
      },
      finalStateToOutput,
    });

    expect(() => fsm('100')).toThrowError(
      `Transition is not defined for state S2 and symbol 0`
    );
  });

  test('return a remainder 0 : "110"', () => {
    const fsm = createModFSM({
      states,
      inputAlphabet,
      initState,
      finalStates,
      transitions,
      finalStateToOutput,
    });

    expect(fsm('110')).toBe(0);
  });

  test('return a remainder 1 : "1010"', () => {
    const fsm = createModFSM({
      states,
      inputAlphabet,
      initState,
      finalStates,
      transitions,
      finalStateToOutput,
    });

    expect(fsm('1010')).toBe(1);
  });

  test('return a remainder 2 : "1110"', () => {
    const fsm = createModFSM({
      states,
      inputAlphabet,
      initState,
      finalStates,
      transitions,
      finalStateToOutput,
    });

    expect(fsm('1110')).toBe(2);
  });
});

describe('modulo four FSM', () => {
  const states = ['S0', 'S1', 'S2', 'S3'];
  const initState = 'S0';
  const finalStates = ['S0', 'S1', 'S2', 'S3'];
  const transitions = {
    S0: { '0': 'S0', '1': 'S1' },
    S1: { '0': 'S2', '1': 'S3' },
    S2: { '0': 'S0', '1': 'S1' },
    S3: { '0': 'S2', '1': 'S3' },
  };
  const finalStateToOutput = {
    S0: 0,
    S1: 1,
    S2: 2,
    S3: 3,
  };

  test('return an error with an invalid init state S4', () => {
    expect(() =>
      createModFSM({
        states,
        inputAlphabet,
        initState: 'S4',
        finalStates,
        finalStateToOutput,
      })
    ).toThrowError(`initState S4 is not an element of the states`);
  });

  test('return an error with an invalid final state ["S1", "S4"]', () => {
    expect(() =>
      createModFSM({
        states,
        inputAlphabet,
        initState,
        finalStates: ['S1', 'S5'],
        finalStateToOutput,
      })
    ).toThrowError(`finalState S5 is not subset of the states`);
  });

  test('return an error with an invalid input string: "112"', () => {
    const fsm = createModFSM({
      states,
      inputAlphabet,
      initState,
      finalStates,
      transitions,
      finalStateToOutput,
    });

    expect(() => fsm('112')).toThrowError('Input symbol 2 is not valid.');
  });

  test('return a remainder 0: "1100"', () => {
    const fsm = createModFSM({
      states,
      inputAlphabet,
      initState,
      finalStates,
      transitions,
      finalStateToOutput,
    });

    expect(fsm('1100')).toBe(0);
  });

  test('return a remainder 1: "1101"', () => {
    const fsm = createModFSM({
      states,
      inputAlphabet,
      initState,
      finalStates,
      transitions,
      finalStateToOutput,
    });

    expect(fsm('1101')).toBe(1);
  });

  test('return a remainder 2 : "1010"', () => {
    const fsm = createModFSM({
      states,
      inputAlphabet,
      initState,
      finalStates,
      transitions,
      finalStateToOutput,
    });

    expect(fsm('1010')).toBe(2);
  });

  test('return a remainder 3 : "1011"', () => {
    const fsm = createModFSM({
      states,
      inputAlphabet,
      initState,
      finalStates,
      transitions,
      finalStateToOutput,
    });

    expect(fsm('1011')).toBe(3);
  });
});
