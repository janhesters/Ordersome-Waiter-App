import { schema } from 'normalizr';
import { ROUTE_ORDERS, ROUTE_TWIG_STATUS_CREATE } from '../../../config/constants/routes';
import { OrderStatusResponse } from '../../../config/types';
import { postRequestWithHeader } from '../../utils/serverRequests';

const orderStatusSchema = new schema.Object({});

export const postOrderStatusCreate = (body: {
  order_status: string;
  order_uuid: string;
  restaurant_slug: string;
}): Promise<OrderStatusResponse> =>
  postRequestWithHeader(ROUTE_ORDERS + ROUTE_TWIG_STATUS_CREATE, body, orderStatusSchema);
