import {
  ROUTE_QR_CODES,
  ROUTE_TWIG_ADD_CHECKIN_FUNCTION,
  ROUTE_TWIG_REMOVE_FUNCTION
} from '../../../config/constants/routes';
import { qrCodeSchema } from '../../../config/schemas/qrCodes';
import { QRCodeResponse } from '../../../config/types';
import { postRequestWithHeader } from '../../utils/serverRequests';

export const postRemoveQRCodeFunction = (uuid: string, slug: string): Promise<QRCodeResponse> =>
  postRequestWithHeader(
    ROUTE_QR_CODES + uuid + ROUTE_TWIG_REMOVE_FUNCTION,
    { restaurant_slug: slug },
    qrCodeSchema
  );

export const postQRCodeAssignCheckinFunction = (
  uuid: string,
  slug: string,
  num: number
): Promise<QRCodeResponse> =>
  postRequestWithHeader(
    ROUTE_QR_CODES + uuid + ROUTE_TWIG_ADD_CHECKIN_FUNCTION,
    { restaurant_slug: slug, table_number: num },
    qrCodeSchema
  );
