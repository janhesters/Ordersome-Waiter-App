import { ROUTE_RESTAURANTS, ROUTE_TWIG_MENU } from '../../../config/constants/routes';
import { menuSchema } from '../../../config/schemas/menus';
import { MenuListResponse } from '../../../config/types';
import { getRequestWithHeader } from '../../utils/serverRequests';

const menuListSchema = [menuSchema];

export const getMenuList = (slug: string): Promise<MenuListResponse> =>
  getRequestWithHeader(ROUTE_RESTAURANTS + slug + ROUTE_TWIG_MENU, menuListSchema);
