function renderStep(stepSize, value) {
  const li = document.createElement('li');
  li.innerHTML = '... + ' + stepSize + ' = ' + value;
  return li;
}
