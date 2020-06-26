import MockDate from 'mockdate'
import { API_DATA } from '../constants'

MockDate.set('2020-06-23')

process.env.PER_PAGE = 10
process.env.API_URL = 'https://feyz.li/api'

global.data = API_DATA

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(API_DATA)
  })
)
