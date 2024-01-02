import { taskFirst, taskNext } from '../0-constants';

describe('taskFirst function', () => {
  it('should return a string containing "const"', () => {
    const result = taskFirst();
    expect(result).toContain('const');
  });
});

describe('taskNext function', () => {
  it('should return a string containing "let" and "is okay"', () => {
    const result = taskNext();
    expect(result).toContain('let');
    expect(result).toContain('is okay');
  });
});