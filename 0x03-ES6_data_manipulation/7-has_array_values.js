function hasValuesFromArray(set, arr) {
  // Check if all elements in the array exist within the set
  return arr.every((element) => set.has(element));
}

export default (hasValuesFromArray);
