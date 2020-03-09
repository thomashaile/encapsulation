const incrementor = {
  stepSize: 1,
  current: 0,
  increment: function () {
    debugger;
    const newCurrent = this.current + this.stepSize;
    this.current = newCurrent;
  }
};
