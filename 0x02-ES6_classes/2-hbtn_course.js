export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'Name');
    this._length = this.validateNumber(length, 'Length');
    this._students = this.validateStudentsArray(students);

    // Define getters and setters
    Object.defineProperties(this, {
      name: {
        get() {
          return this._name;
        },
        set(value) {
          this._name = this.validateString(value, 'Name');
        },
      },
      length: {
        get() {
          return this._length;
        },
        set(value) {
          this._length = this.validateNumber(value, 'Length');
        },
      },
      students: {
        get() {
          return this._students;
        },
        set(value) {
          this._students = this.validateStudentsArray(value);
        },
      },
    });
  }

  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  validateNumber(value, attribute) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  validateStudentsArray(value) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return value;
  }
}
