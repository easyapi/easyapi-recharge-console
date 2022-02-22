/**
 * 获取列表
 *
 */
export const getGasolineOrderList = (params, context) => {
  return context.$axios.get(`${process.env.baseUrl}/gasoline-orders`,
    {
      params: {
        ...params
      }
    }
  )
}

/**
 * 获取加油卡订单状态
 *
 */
export const getGasolineOrderState = (params, context) => {
  return context.$axios.get(`${process.env.baseUrl}/gasoline-order/state`,
    {
      params: {
        ...params
      }
    }
  )
}

/**
 * 获取加油卡产品列表
 *
 */
export const getProductList = (params, context) => {
  return context.$axios.get(`${process.env.baseUrl}/gasoline-order/product`,
    {
      params: {
        ...params
      }
    }
  )
}
