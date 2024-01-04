export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;

    // Define getters and setters
    Object.defineProperties(this, {
      code: {
        get() {
          return this._code;
        },
        set(value) {
          this._code = value;
        },
      },
      name: {
        get() {
          return this._name;
        },
        set(value) {
          this._name = value;
        },
      },
    });
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
