function init() {
  // render initial state to DOM
  document.getElementById('step-size-input').value = incrementor.state.stepSize;

  const renderedCurrent = incrementor.renderCurrent();
  document.getElementById('steps-history').innerHTML = renderedCurrent;

  // log interaction
  log.push({
    renderedCurrent,
    initialState: JSON.parse(JSON.stringify(incrementor.state))
  });
};

window.onload = init;
