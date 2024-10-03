import { handleTransitions } from './handleTransitions';
import { validateInitState, validateFinalStates } from './utils/validators';

/**
  A finite automaton (FA) is a 5-tuple (Q,Σ,q0,F,δ) where,

  Q is a finite set of states;
  Σ is a finite input alphabet;
  q0 ∈ Q is the initial state;
  F ⊆ Q is the set of accepting/final states; and
  δ:Q×Σ→Q is the transition function.
*/
export const createModFSM = ({
  states, // Q
  inputAlphabet, // Σ
  initState, // q0
  finalStates, // F
  transitions, // δ
  finalStateToOutput,
}: ModFSMParams): ModFSMReturn => {
  // q0 ∈ Q is the initial state
  validateInitState(initState, states);

  // F ⊆ Q is the set of accepting/final states
  validateFinalStates(finalStates, states);

  // return transition function which has a parameter of input string
  return (input: string) => {
    const finalState = handleTransitions(
      input,
      initState,
      inputAlphabet,
      transitions!
    );

    return finalStateToOutput[finalState];
  };
};
