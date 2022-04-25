import { adder } from 'app/utils/adder';

describe('adder', () => {
  it('should return the correct sum', () => {
    expect(adder(1, 2)).toBe(3);
  });
});
