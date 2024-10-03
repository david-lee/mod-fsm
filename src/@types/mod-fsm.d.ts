type State = string;
type InputAlphabet = Array<string>;
type Transitions = Record<State, Record<string, State>>;
type FinalStateOuputMap = Record<string, number>;
type ModFSMReturn = (inputStr: string) => number;

interface ModFSMParams {
  // finite set of states
  states: Array<State>;
  // finite input alphabet
  inputAlphabet: InputAlphabet;
  // the initial state
  initState: State;
  // the set of accepting/final states
  finalStates: Array<State>;
  // the transition map
  transitions?: Transitions;
  // map of final state to output like S0 -> 0, S1 -> 1, S2 -> 2
  //
  // Note: if we can make a rule of state name like "'S' + remainder"
  //       no finalStateToOupt map is required. Just return the last digit
  finalStateToOutput: FinalStateOuputMap;
}
