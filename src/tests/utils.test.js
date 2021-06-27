import countRemainingTodos from '../utils/countRemainingTodos';
import sortTodos from '../utils/sortTodos';

describe('countRemainingTodos', () => {
  it('returns correct amount of unfinished todos', () => {
    const mock = [
      {
        done: false,
      },
      {
        done: false,
      },
      {
        done: false,
      },
      {
        done: true,
      },
    ];
    expect(countRemainingTodos(mock)).toEqual(3);
  });
});

describe('sortTodos', () => {
  it('correctly sorts todos', () => {
    const mock = [
      {
        id: 1,
        done: false,
      },
      {
        id: 2,
        done: true,
      },
      {
        id: 3,
        done: false,
      },
    ];
    const correct = [
      {
        id: 1,
        done: false,
      },
      {
        id: 3,
        done: false,
      },
      {
        id: 2,
        done: true,
      },
    ];
    expect(sortTodos(mock)).toEqual(correct);
  });
});
