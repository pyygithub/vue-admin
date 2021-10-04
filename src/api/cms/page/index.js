import request from '@/utils/request'

export const getPageList = (page, size, params) => {
  return request({
    url: `/v1/page/list/${page}/${size}`,
    method: 'get',
    params: {params}
  })
}

