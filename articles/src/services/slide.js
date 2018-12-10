import util from '@/services/util'
const slide = {
  get: async (limit = 5) => {
    return await util.api({url: 'soli', data: {limit: limit}})
  }
}

export default slide

