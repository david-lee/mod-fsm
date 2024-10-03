// For any element q of Q and any symbol σ∈Σ, we interpret δ(q,σ) as the next state to which the FA
// moves, if it is in state q and receives the input σ.
export const handleTransitions = (
  input: string,
  initState: string,
  inputAlphabet: InputAlphabet,
  transitions: Transitions
) => {
  // get an array of alphabet (symbol) from input string
  const symbols = input.split('');
  // start transitioning with initState
  let currentState = initState;

  symbols.forEach((symbol) => {
    if (!inputAlphabet.includes(symbol)) {
      throw new Error(`Input symbol ${symbol} is not valid.`);
    }

    // next state is current state + input symbol
    const nextState = transitions[currentState]?.[symbol];

    if (!nextState) {
      throw new Error(`Transition is not defined for state ${currentState}`);
    }

    currentState = nextState;
  });

  // it is the final/accepting state
  return currentState;
};
