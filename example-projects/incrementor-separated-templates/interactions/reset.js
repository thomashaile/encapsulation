function resetHandler() {
  debugger;

  // reset state
  incrementor.current = 0;
  incrementor.stepSize = 1;

  // update DOM from state
  document.getElementById('step-size-input').value = incrementor.stepSize;

  const renderedCurrent = incrementor.renderCurrent();
  document.getElementById('steps-history').innerHTML = renderedCurrent;

  // log interaction
  //  PS. JSON.stringify ignores methods!
  log.push({
    interaction: 'reset',
    renderedCurrent,
    newState: JSON.parse(JSON.stringify(incrementor))
  });
}
document.getElementById('reset-button').addEventListener('click', resetHandler);
