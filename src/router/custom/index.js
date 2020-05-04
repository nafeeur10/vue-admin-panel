import Layout from '@/layout'

const customRouter = {
  path: '/reports',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ReportPages',
  meta: {
    title: 'Reports',
    icon: 'chart'
  },
  children: [
    {
      path: 'revenue',
      component: () => import('@/views/custom/reports/index'),
      name: 'RevenueDashboard',
      meta: { title: 'Revenue', noCache: true }
    },
    {
      path: 'orders',
      component: () => import('@/views/custom/reports/components/orders/index'),
      name: 'OrdersDashboard',
      meta: { title: 'Orders', noCache: true }
    },
    {
      path: 'refunds',
      component: () => import('@/views/custom/reports/components/refunds/index'),
      name: 'refundsDashboard',
      meta: { title: 'Refunds', noCache: true }
    },
    {
      path: 'devices',
      component: () => import('@/views/custom/reports/components/devices/index'),
      name: 'devicesDashboard',
      meta: { title: 'Devices', noCache: true }
    },
    {
      path: 'sources',
      component: () => import('@/views/custom/reports/components/sources/index'),
      name: 'SourcesDashboard',
      meta: { title: 'Sources', noCache: true }
    },
    {
      path: 'forecast',
      component: () => import('@/views/custom/reports/components/forecast/index'),
      name: 'ForecastDashboard',
      meta: { title: 'Forecast', noCache: true }
    },
    {
      path: '404',
      component: () => import('@/views/error-page/404'),
      name: 'Page404',
      meta: { title: '404', noCache: true }
    }
  ]
}

export default customRouter
