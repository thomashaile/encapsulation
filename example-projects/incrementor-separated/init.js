window.onload = () => {
  // render initial state to DOM
  document.getElementById('step-size-input').value = incrementor.stepSize;

  const initialItem = renderInitialValue(incrementor.current);
  document.getElementById('steps-history').appendChild(initialItem);

  // log interaction
  //  PS. JSON.stringify ignores methods!
  log.push({
    initialState: JSON.parse(JSON.stringify(incrementor))
  });
};
