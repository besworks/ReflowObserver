export class ReflowObserver {
  constructor(beforeReflow, afterReflow) {
    this.observed = [];
    this.observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        requestAnimationFrame(timestamp => {
          beforeReflow.call(entry.target, timestamp);
          requestAnimationFrame(timestamp => {
            afterReflow.call(entry.target, timestamp);
          });
        });
      }
    });
  }
  
  unobserve(node) {
    this.observer.unobserve(node);
    this.observed.splice(this.observed.indexOf(node), 1);
  }
  
  observe(node) {
    this.observer.observe(node);
    this.observed.push(node);
  }
  
  disconnect() {
    this.observer.disconnect();
    this.observed = [];
  }
}
