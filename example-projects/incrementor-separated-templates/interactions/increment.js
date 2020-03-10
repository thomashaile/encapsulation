function incrementHandler() {
  debugger;

  // call app method to update state
  incrementor.increment();

  // update DOM from state
  const renderedStep = incrementor.renderStep();
  document.getElementById('steps-history').innerHTML += renderedStep;

  // log interaction
  //  PS. JSON.stringify ignores methods!
  log.push({
    interaction: 'increment',
    renderedStep,
    newState: JSON.parse(JSON.stringify(incrementor))
  });
}
document.getElementById('increment-button').addEventListener('click', incrementHandler);
