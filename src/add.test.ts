import { describe, expect, test } from 'vitest';
import { add } from './add';

describe('add', () => {
  test('2 and 3 makes 5', () => {
    const actualResult = add(2, 3);
    expect(actualResult).toBe(5);
  });
});