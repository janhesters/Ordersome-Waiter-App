import { WaitercallListResponse, WaitercallUpdateResponse } from '../../types';

export const rawWaitercallListResponse = [
  {
    consumer: { uuid: 'cafe1f47-487d-457b-8c9c-0525f05dc528' },
    done: false,
    restaurant_slug: 'pontgrill',
    uuid: '43b5e372-223e-47a1-82c8-30919bb39f59',
    waitercall_type: 'bill'
  }
];

export const normalizedWaitercallListResponse: WaitercallListResponse = {
  entities: {
    waitercalls: {
      '43b5e372-223e-47a1-82c8-30919bb39f59': {
        consumer: 'cafe1f47-487d-457b-8c9c-0525f05dc528',
        done: false,
        restaurantSlug: 'pontgrill',
        uuid: '43b5e372-223e-47a1-82c8-30919bb39f59',
        waitercallType: 'bill'
      }
    }
  },
  result: ['43b5e372-223e-47a1-82c8-30919bb39f59']
};

export const rawWaitercallUpdateResponse = {
  consumer: { uuid: 'd6702795-7b69-47b9-a8b3-2b5232c41330' },
  done: true,
  uuid: 'd5ee7f19-bad4-41a5-91de-7869476b4df4',
  waitercall_type: 'bill'
};

export const normalizedWaitercallUpdateResponse: WaitercallUpdateResponse = {
  entities: {
    waitercalls: {
      'd5ee7f19-bad4-41a5-91de-7869476b4df4': {
        consumer: 'd6702795-7b69-47b9-a8b3-2b5232c41330',
        done: true,
        uuid: 'd5ee7f19-bad4-41a5-91de-7869476b4df4',
        waitercallType: 'bill'
      }
    }
  },
  result: 'd5ee7f19-bad4-41a5-91de-7869476b4df4'
};
