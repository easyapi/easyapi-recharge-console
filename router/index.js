const routers = [
  {
    title: '加油卡充值',
    children: [
      {
        title: '在线充值',
        path: '/refuelling-cards/recharge',
        icon: 'el-icon-s-help',
        children: []
      },
      {
        title: '充值订单',
        path: '/refuelling-cards/list',
        icon: 'el-icon-s-help',
        children: []
      }
    ]
  },
  {
    title: '手机话费充值',
    children: [
      {
        title: '在线充值',
        path: '/mobile/recharge',
        icon: 'el-icon-s-help',
        children: []
      },
      {
        title: '充值订单',
        path: '/mobile/list',
        icon: 'el-icon-s-help',
        children: []
      }
    ]
  }
]
export default routers
