import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

/**
 * 支出统计
 * @param start
 * @param end
 * @param type 1年 2月 3星期 4天
 * @returns {*}
 */
export function expense(start,end,type) {
  return request({
    url: `${apiPrefix}/api/stat/expense?start=${start}&end=${end}&type=${type}`,
    method: 'get',
  })
}

/**
 * 收入统计
 * @param start
 * @param end
 * @param type 1年 2月 3星期 4天
 * @returns {*}
 */
export function income(start,end,type) {
  return request({
    url: `${apiPrefix}/api/stat/income?start=${start}&end=${end}&type=${type}`,
    method: 'get',
  })
}
