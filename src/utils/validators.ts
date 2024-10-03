export const validateInitState = (initState: string, states: Array<string>) => {
  if (!states.includes(initState)) {
    throw new Error(`initState ${initState} is not an element of the states`);
  }

  return true;
};

export const validateFinalStates = (
  finalStates: Array<State>,
  states: Array<State>
) => {
  const invalidFinalState = finalStates.find(
    (finalState) => !states.includes(finalState)
  );

  if (invalidFinalState) {
    throw new Error(`finalState is not subset of the states`);
  }

  return true;
};
