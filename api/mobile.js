/**
 * 获取列表
 *
 */
export const getMobileList = (params, context) => {
  return context.$axios.get(`${process.env.baseUrl}/mobile-orders`,
    {
      params: {
        ...params
      }
    }
  )
}
