import getEntities from './getEntities';

describe('getEntities', () => {
  const normalizedData = {
    entities: {
      articles: {
        '123': {
          author: '1',
          comments: ['324'],
          id: '123',
          title: 'My awesome blog post'
        }
      },
      comments: { '324': { commentId: '324', commenter: '2' } },
      users: {
        '1': { name: 'Paul', userId: '1' },
        '2': { name: 'Nicole', userId: '2' }
      }
    },
    result: '123'
  };

  const expected = {
    articles: {
      '123': {
        author: '1',
        comments: ['324'],
        id: '123',
        title: 'My awesome blog post'
      }
    },
    comments: { '324': { commentId: '324', commenter: '2' } },
    users: {
      '1': { name: 'Paul', userId: '1' },
      '2': { name: 'Nicole', userId: '2' }
    }
  };

  it('should just return the value of the \'entities\' key', () => {
    expect(getEntities(normalizedData)).toEqual(expected);
  });
});
