import {
  ROUTE_RESTAURANTS,
  ROUTE_TWIG_WAITERCALLS,
  ROUTE_WAITERCALLS
} from '../../../config/constants/routes';
import { waitercallSchema } from '../../../config/schemas/waitercalls';
import { WaitercallListResponse, WaitercallUpdateResponse } from '../../../config/types';
import { getRequestWithHeader, putRequestWithHeader } from '../../utils/serverRequests';

const waitercallListSchema = [waitercallSchema];

export const getWaitercallList = (slug: string): Promise<WaitercallListResponse> =>
  getRequestWithHeader(ROUTE_RESTAURANTS + slug + ROUTE_TWIG_WAITERCALLS, waitercallListSchema);

export const putUpdateWaitercall = (
  uuid: string,
  body: { done: boolean; restaurant_slug: string }
): Promise<WaitercallUpdateResponse> =>
  putRequestWithHeader(ROUTE_WAITERCALLS + uuid + '/', body, waitercallSchema);
