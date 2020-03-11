
function resetHandler() {
  debugger;
  // reset state
  incrementor.state.current = 0;
  incrementor.state.stepSize = 1;
  // log handler
  log.push({ handler: 'reset' });
  // reuse init handler
  init();
};
document.getElementById('reset-button').addEventListener('click', resetHandler);
