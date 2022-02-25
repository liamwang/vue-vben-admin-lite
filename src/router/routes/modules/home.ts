import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const setup: AppRouteModule = {
  path: '/',
  name: 'Home',
  component: LAYOUT,
  meta: {
    orderNo: 1,
    hideChildrenInMenu: true,
    icon: 'ion:home-outline',
    title: '首页',
  },
  children: [
    {
      path: '',
      name: 'SetupDemoPage',
      component: () => import('/@/views/home/index.vue'),
      meta: {
        title: '首页',
        icon: 'whh:paintroll',
        hideMenu: true,
      },
    },
  ],
};

export default setup;
