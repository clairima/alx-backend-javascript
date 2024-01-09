function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create an ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to work with the ArrayBuffer
  const dataView = new DataView(buffer);

  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);

  return dataView;
}

export default (createInt8TypedArray);
