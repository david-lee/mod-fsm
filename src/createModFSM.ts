import { isInputValid } from './isInputValid';

type State = string;

interface ModFSMParams {
  states: Array<State>;
  inputAlphabet: Array<string>;
  initState: State;
  finalStates: Array<State>;
  transitions?: Record<State, Record<string, State>>;
  finalStateToOutput: { [index: string]: number };
}

type ModFSMReturn = (inputStr: string) => number;

/**
  A finite automaton (FA) is a 5-tuple (Q,Σ,q0,F,δ) where,

  Q is a finite set of states;
  Σ is a finite input alphabet;
  q0 ∈ Q is the initial state;
  F ⊆ Q is the set of accepting/final states; and
  δ:Q×Σ→Q is the transition function.
*/
export const createModFSM = ({
  states,
  inputAlphabet,
  initState,
  finalStates,
  transitions,
  finalStateToOutput,
}: ModFSMParams): ModFSMReturn => {
  // For any element q of Q and any symbol σ∈Σ, we interpret δ(q,σ) as the state to which the FA
  // moves, if it is in state q and receives the input σ.
  const run = (input: string) => {
    let currentState = initState;
    const symbols = input.split('');

    symbols.forEach((symbol) => {
      if (!inputAlphabet.includes(symbol)) {
        throw new Error(`Input symbol ${symbol} is not valid.`);
      }

      // next state is current state + input symbol
      const nextState = transitions![currentState]
        ? transitions![currentState][symbol]
        : null;

      if (!nextState) {
        throw new Error(
          `Transition is not defined for state ${currentState} and symbol ${symbol}`
        );
      }

      currentState = nextState;
    });

    return finalStateToOutput[currentState];
  };

  // validate if initState is an element of states
  if (!states.includes(initState)) {
    throw new Error(`initState ${initState} is not an element of the states`);
  }

  // F ⊆ Q is the set of accepting/final states;
  const invalidFinalState = finalStates.find(
    (finalState) => !states.includes(finalState)
  );

  // validate if finalStates are subset of states
  if (invalidFinalState) {
    throw new Error(
      `finalState ${invalidFinalState} is not subset of the states`
    );
  }

  return run;
};
