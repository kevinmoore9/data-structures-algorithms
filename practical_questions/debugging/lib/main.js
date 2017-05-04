import { getNumberFact } from './feedback';
import { mathProblem, evaluateAnswer } from './math-problem';

document.addEventListener('DOMContentLoaded', () => {
  getNumberFact(mathProblem.answer());

  const firstDisplayNum = document.getElementById('first-num');
  firstDisplayNum.innerHTML = mathProblem.firstNum;
  const displaySymbol = document.getElementById('operation');
  displaySymbol.innerHTML = mathProblem.operationSymbol;
  const secondDisplayNum = document.getElementById('second-num');
  secondDisplayNum.innerHTML = mathProblem.secondNum;

  // Get a Number Fact and set its number-fact innerHTML while keeping it hidden

  // add evaluateAnswer callback to the form
  const mathForm = document.getElementById('math-form');
  mathForm.addEventListener('submit', evaluateAnswer);
});
