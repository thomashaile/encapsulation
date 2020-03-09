function incrementHandler() {
  debugger;

  // call app method
  incrementor.increment();

  // update DOM from state
  const newStepComponent = renderStep(incrementor.stepSize, incrementor.current);
  document.getElementById('steps-history')
    .appendChild(newStepComponent);

  // log interaction
  //  PS. JSON.stringify ignores methods!
  log.push({
    interaction: 'increment',
    newState: JSON.parse(JSON.stringify(incrementor))
  });
}
document.getElementById('increment-button').addEventListener('click', incrementHandler);
