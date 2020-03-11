const incrementor = {
  state: {
    stepSize: 1,
    current: 0,
  },
  increment: function () {
    debugger;
    const newCurrent = this.state.current + this.state.stepSize;
    this.state.current = newCurrent;
  },
  renderCurrent: function () {
    return `<li>${this.state.current}</li>`;
  },
  renderStep: function () {
    return `<li>... + ${this.state.stepSize} = ${this.state.current}</li>`;
  }
};
