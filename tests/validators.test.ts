import { describe, expect, test } from 'vitest';
import {
  validateInitState,
  validateFinalStates,
} from '../src/utils/validators';
import modThreeMock from './mockData/modThree-fsm.json';

describe('validator for initState', () => {
  test('return true for valid state s1', () => {
    expect(validateInitState('s1', modThreeMock.states)).toBeTruthy();
  });

  test('return an error for invalid state s3', () => {
    expect(() => validateInitState('s3', modThreeMock.states)).toThrowError(
      'initState s3 is not an element of the states'
    );
  });
});

describe('validator for finalStates', () => {
  test('return true for valid final states [s1, s2]', () => {
    expect(validateFinalStates(['s1', 's2'], modThreeMock.states)).toBeTruthy();
  });

  test('return an error for invalid final state [s1, s2, s3]', () => {
    expect(() =>
      validateFinalStates(['s1', 's2', 's3'], modThreeMock.states)
    ).toThrowError('finalState is not subset of the states');
  });
});
