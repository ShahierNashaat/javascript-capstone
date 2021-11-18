import countMovies from './counter.js';
import getMovies from './__mocks__/api-controller.js';

jest.mock('./api-controller');

describe('Test movies counter', () => {
  test('Add counter for action to be 1', () => {
    expect(countMovies(getMovies(), 'Action')).toBe(1);
  });
  test('Add counter for comedy to be 1', () => {
    expect(countMovies(getMovies(), 'Comedy')).toBe(1);
  });
  test('Add counter for drama to be 1', () => {
    expect(countMovies(getMovies(), 'Drama')).toBe(1);
  });
});