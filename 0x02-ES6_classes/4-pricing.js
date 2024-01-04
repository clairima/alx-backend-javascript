// import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;

    // Define getters and setters
    Object.defineProperties(this, {
      amount: {
        get() {
          return this._amount;
        },
        set(value) {
          this._amount = value;
        },
      },
      currency: {
        get() {
          return this._currency;
        },
        set(value) {
          this._currency = value;
        },
      },
    });
  }

  displayFullPrice() {
    const { _name, _code } = this._currency;
    return `${this._amount} ${_name} (${_code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
