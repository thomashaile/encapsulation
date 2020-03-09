function setStepSizeHandler() {
  debugger;

  // read user input from DOM
  const newStepSizeStr = document.getElementById('step-size-input').value;
  const newStepSize = Number(newStepSizeStr);

  // update state
  incrementor.stepSize = newStepSize;

  // log interaction
  //  PS. JSON.stringify ignores methods!
  log.push({
    interaction: 'set step size',
    newStepSize,
    newState: JSON.parse(JSON.stringify(incrementor))
  });
}
document.getElementById('set-step-size-button').addEventListener('click', setStepSizeHandler);
