function resetHandler() {
  debugger;

  // reset state
  incrementor.state.current = 0;
  incrementor.state.stepSize = 1;

  // update DOM from state
  document.getElementById('step-size-input').value = incrementor.state.stepSize;

  const renderedCurrent = incrementor.renderCurrent();
  document.getElementById('steps-history').innerHTML = renderedCurrent;

  // log interaction
  log.push({
    interaction: 'reset',
    renderedCurrent,
    newState: JSON.parse(JSON.stringify(incrementor.state))
  });
}
document.getElementById('reset-button').addEventListener('click', resetHandler);
