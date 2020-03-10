const incrementor = {
  stepSize: 1,
  current: 0,
  all: [],
  increment: function () {
    debugger;
    const newCurrent = this.current + this.stepSize;
    this.current = newCurrent;
  },
  renderCurrent: function () {
    return `<li>${this.current}</li>`;
  },
  renderStep: function () {
    return `<li>... + ${this.stepSize} = ${this.current}</li>`;
  }
};
