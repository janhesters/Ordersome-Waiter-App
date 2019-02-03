import { schema } from 'normalizr';
import camelizeAndNormalize from './camelizeAndNormalize';

describe('camelizeAndNormalize', () => {
  const data = {
    author: {
      name: 'Paul',
      user_id: '1'
    },
    comments: [
      {
        comment_id: '324',
        commenter: {
          name: 'Nicole',
          user_id: '2'
        }
      }
    ],
    id: '123',
    title: 'My awesome blog post'
  };

  const user = new schema.Entity('users', {}, { idAttribute: 'userId' });

  const comment = new schema.Entity('comments', { commenter: user }, { idAttribute: 'commentId' });

  const article = new schema.Entity('articles', {
    author: user,
    comments: [comment]
  });

  const expected = {
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

  it('should camelize and normalize the incoming json', () => {
    expect(camelizeAndNormalize(data, article)).toEqual(expected);
  });
});
