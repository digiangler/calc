import "@testing-library/react";
import { ButtonCode, calculate, State } from "./calculate";

function makeInitState(): State {
  return {
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false,
  };
}

function execCalc(buttons: ButtonCode[], state: State): State {
  buttons.forEach((button) => {
    state = calculate(button, state);
  });
  return state;
}

test("add", () => {
  const finalState = execCalc(["1", "+", "2", "="], makeInitState());
  expect(finalState.current).toBe("3");
  expect(finalState.operand).toBe(0);
  expect(finalState.operator).toBe(null);
  expect(finalState.isNextClear).toBe(true);
});
