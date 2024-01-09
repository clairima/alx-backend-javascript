function cleanSet(set, startString) {
  // Filter set values that start with startString, and join them with '-'
  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}

export default (cleanSet);
