const data = require('./data.json')

global.data = data

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(data)
  })
)
