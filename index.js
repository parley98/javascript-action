import { getInput, setOutput, setFailed } from "@actions/core";
import github from "@actions/github";

try {
  const number1 = getInput("number1");
  const number2 = getInput("number2");

  result = parseInt(number1) + parseInt(number2);

  setOutput("result", result);
} catch (error) {
  setFailed(error.message);
}
