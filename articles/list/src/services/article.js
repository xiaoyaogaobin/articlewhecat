import util from '@/services/util'

const article = {
  /**
   * 获取所有文章数据
   * @param page  分页页码
   * @param limit 每页显示数据条数
   * @param params
   * @returns {Promise<*>}
   */
  get: async (params = {}, page = 1, limit = 10) => {
    // console.log(params)
    params.page = page
    params.include = 'category,user'
    params.limit = limit
    // console.log(params)
    return await util.api({url: 'articles', data: params})
  },
  show: async (id) => {
    let response = await util.api({url: 'show/' + id})
    // console.log(response)
    return response
  }
}
export default article
