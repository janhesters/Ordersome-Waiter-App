import { ROUTE_RESTAURANTS, ROUTE_TWIG_TABLES } from '../../../config/constants/routes';
import { tableWithOrdersAndCheckinsSchema } from '../../../config/schemas/tables';
import { TablesWithOrdersListResponse } from '../../../config/types';
import { getRequestWithHeader } from '../../utils/serverRequests';

const tableListSchema = [tableWithOrdersAndCheckinsSchema];

export const getTablesWithOrdersList = (slug: string): Promise<TablesWithOrdersListResponse> =>
  getRequestWithHeader(ROUTE_RESTAURANTS + slug + ROUTE_TWIG_TABLES, tableListSchema);
