import countMovies, {countComment} from './counter.js';
import getMovies from './__mocks__/api-controller.js';

jest.mock('./api-controller');

describe('Test movies counter', () => {
  test('test counter for action to be 1', () => {
    expect(countMovies(getMovies(), 'Action')).toBe(1);
  });
  test('test counter for comedy to be 1', () => {
    expect(countMovies(getMovies(), 'Comedy')).toBe(1);
  });
  test('test counter for drama to be 1', () => {
    expect(countMovies(getMovies(), 'Drama')).toBe(1);
  });
});

describe('Test comments counter', () => {
  test('test counter for comments to be 2', () => {
    const comments = [
    {
        "comment": "This is nice!",
        "creation_date": "2021-01-10",
        "username": "John"
    },
    {
        "comment": "Great content!",
        "creation_date": "2021-02-10",
        "username": "Jane"
    }
    
  ]
    expect(countComment(comments)).toBe(comments.length);
  });
});