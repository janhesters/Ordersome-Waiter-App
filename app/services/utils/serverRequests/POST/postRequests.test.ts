import fetch, { FetchMock } from 'jest-fetch-mock';
import { schema } from 'normalizr';
import { NetInfo } from 'react-native';
import { postRequestWithHeader, postRequestWithoutHeader } from './postRequests';
// TODO: Replace NetInfo mocks with checkNetwork mocks.

jest.mock('react-native', () => ({
  NetInfo: { isConnected: { fetch: jest.fn() } },
  Platform: { OS: 'android' }
}));

const response = {
  author: {
    id: '1',
    name: 'Paul'
  },
  comments: [
    {
      commenter: {
        id: '2',
        name: 'Nicole'
      },
      id: '324'
    }
  ],
  id: '123',
  title: 'My awesome blog post'
};

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
    comments: {
      '324': { id: '324', commenter: '2' }
    },
    users: {
      '1': { id: '1', name: 'Paul' },
      '2': { id: '2', name: 'Nicole' }
    }
  },
  result: '123'
};

const fullTestUrl = 'https://ordersome.com';

const user = new schema.Entity('users');
const comment = new schema.Entity('comments', {
  commenter: user
});
const testSchema = new schema.Entity('articles', {
  author: user,
  comments: [comment]
});
const body = { done: true, restaurant_slug: 'test-slug' };

describe('post request without header', () => {
  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
    (NetInfo.isConnected.fetch as jest.Mock).mockResolvedValueOnce(true);
  });

  it('calls the given fullUrlRoute and returns data', () => {
    (fetch as FetchMock).mockResponseOnce(JSON.stringify({ data: '12345' }));

    expect.assertions(3);

    return postRequestWithoutHeader(fullTestUrl, body).then(res => {
      expect(res.data).toEqual('12345');
      expect((fetch as FetchMock).mock.calls.length).toEqual(1);
      expect((fetch as FetchMock).mock.calls[0][0]).toEqual(fullTestUrl);
    });
  });

  it('recognizes when a response\'s status is not okay', () => {
    (fetch as FetchMock).mockResponseOnce(JSON.stringify({ ok: false }), { status: 403 });

    expect.assertions(1);

    return postRequestWithoutHeader(fullTestUrl, body).catch(err => {
      expect(err.ok).toEqual(false);
    });
  });

  it('recognizes a failed fetch request', () => {
    (fetch as FetchMock).mockReject(new Error('fake error message'));
    expect.assertions(1);

    return postRequestWithoutHeader(fullTestUrl, body).catch(err => {
      expect(err).toEqual(Error('fake error message'));
    });
  });
});

describe('post request with header', () => {
  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
    (NetInfo.isConnected.fetch as jest.Mock).mockResolvedValueOnce(true);
  });

  it('calls the given fullUrlRoute and returns data', () => {
    (fetch as FetchMock).mockResponseOnce(JSON.stringify(response));

    expect.assertions(3);

    return postRequestWithHeader(fullTestUrl, body, testSchema).then(res => {
      expect(res).toEqual(expected);
      expect((fetch as FetchMock).mock.calls.length).toEqual(1);
      expect((fetch as FetchMock).mock.calls[0][0]).toEqual(fullTestUrl);
    });
  });

  it('recognizes when a response\'s status is not okay', () => {
    (fetch as FetchMock).mockResponseOnce(JSON.stringify({ ok: false }), { status: 403 });

    expect.assertions(1);

    return postRequestWithHeader(fullTestUrl, body, testSchema).catch(err => {
      expect(err.ok).toEqual(false);
    });
  });

  it('recognizes a failed fetch request', () => {
    (fetch as FetchMock).mockReject(new Error('fake error message'));
    expect.assertions(1);

    return postRequestWithHeader(fullTestUrl, body, testSchema).catch(err => {
      expect(err).toEqual(Error('fake error message'));
    });
  });
});
