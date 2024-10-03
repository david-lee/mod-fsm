# Finite State Machine(FSM) for modulo procedure

It is a library written in TypeScript to create a FSM based on the abstract definition below:

```
A finite automaton (FA) is a 5-tuple (Q,Σ,q0,F,δ) where,

Q is a finite set of states;
Σ is a finite input alphabet;
q0 ∈ Q is the initial state;
F ⊆ Q is the set of accepting/final states; and
δ:Q×Σ→Q is the transition function.
For any element q of Q and any symbol σ∈Σ, we interpret δ(q,σ) as the state to which the FA
moves, if it is in state q and receives the input σ
```

## Clone to local

This project is scaffoled by [Vite](https://vitejs.dev/guide/). It requires Node.js version 18+ or 20+.

```
git clone https://github.com/david-lee/mod-fsm.git
cd mod-fsm
npm i
```

## Usage

> Note: state names are **case-sensitive**

```javascript
const fsmDef = {
  states: ['s0', 's1', 's2'],
  inputAlphabet: ['0', '1'],
  initState: 's0',
  finalStates: ['s0', 's1', 's2'],
  transitions: {
    s0: { 0: 's0', 1: 's1' },
    s1: { 0: 's2', 1: 's0' },
    s2: { 0: 's1', 1: 's2' },
  },
  finalStateToOutput: {
    s0: 0,
    s1: 1,
    s2: 2,
  },
};

const fsm = createModFSM({ ...fsmDef });

const remainder = fsm('110'); // --> return 0
```

## Running tests

Unit tests are run by [Vitest](https://vitest.dev/guide/)

```
// run unit tests
npm run test

// generate coverage
npm run test:coverage
```

## View test coverage

If you run `test:coverage`, it will generate a `coverage` folder. If you open `index.html`, you can have more details about code coverage.

`npm run test:coverage` shows the % of coverage

```
% Coverage report

| File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| -------------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files            | 100     | 100      | 100     | 100     |
| src                  | 100     | 100      | 100     | 100     |
| createModFSM.ts      | 100     | 100      | 100     | 100     |
| handleTransitions.ts | 100     | 100      | 100     | 100     |
| src/utils            | 100     | 100      | 100     | 100     |
| validators.ts        | 100     | 100      | 100     | 100     |
```
