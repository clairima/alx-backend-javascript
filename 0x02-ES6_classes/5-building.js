export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // Define getter
    Object.defineProperty(this, 'sqft', {
      get() {
        return this._sqft;
      },
    });

    // Check if the subclass overrides the evacuationWarningMessage method
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  evacuationWarningMessage() {
    throw new Error('evacuationWarningMessage must be implemented by subclasses');
  }
}
