import { isInputValid } from './isInputValid';

type State = string;
type InputAlphabet = '0' | '1';

type ModFSMFunction = (
  states: Array<State>,
  inputAlphabet: Array<string>,
  initState: State,
  finalStates: Array<State>,
  transitions?: Record<State, Record<string, State>>
) => { run: (inputStr: string) => number };

export const createModFSM: ModFSMFunction = (
  states,
  inputAlphabet,
  initState,
  finalStates,
  transitions
) => {
  const remainder = 0;
  const finalStateMap: { [index: string]: number } = { S0: 0, S1: 1, S2: 2 };

  const run = (inputString: string) => {
    //validate inputAlphabet
    // TODO: validate based on inputAlphabet. no need the util function
    if (!isInputValid(inputString)) {
      throw new Error(`input ${inputString} is not valid.`);
    }

    let nextState = initState;
    const inputArr = inputString.split('');

    inputArr.forEach((input) => {
      nextState = transitions![nextState][input];
    });

    return finalStateMap[nextState];
  };

  // validate if initState is an element of states
  if (!states.includes(initState)) {
    throw new Error(`initState ${initState} is not an element of the states`);
  }

  const invalidFinalState = finalStates.find(
    (finalState) => !states.includes(finalState)
  );

  // validate if finalStates are subset of states
  if (invalidFinalState) {
    throw new Error(
      `finalState ${invalidFinalState} is not subset of the states`
    );
  }

  return { run };
};
