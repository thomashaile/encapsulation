function init() {
  // render initial state to DOM
  document.getElementById('step-size-input').value = incrementor.stepSize;

  const renderedCurrent = incrementor.renderCurrent();
  document.getElementById('steps-history').innerHTML = renderedCurrent;

  // log interaction
  //  PS. JSON.stringify ignores methods!
  log.push({
    initialState: JSON.parse(JSON.stringify(incrementor))
  });
};

window.onload = init;
