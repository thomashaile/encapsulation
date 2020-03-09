function resetHandler() {
  debugger;

  // reset state
  incrementor.current = 0;
  incrementor.stepSize = 1;

  // update DOM from state
  document.getElementById('step-size-input').value = incrementor.stepSize;

  document.getElementById('steps-history').innerHTML = '';
  const initialItem = renderInitialValue(incrementor.current);
  document.getElementById('steps-history').appendChild(initialItem);


  // log interaction
  //  PS. JSON.stringify ignores methods!
  log.push({
    interaction: 'reset',
    newState: JSON.parse(JSON.stringify(incrementor))
  });
}
document.getElementById('reset-button').addEventListener('click', resetHandler);
