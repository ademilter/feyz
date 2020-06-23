module.exports = {
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./test/global.js'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!(imask)/)'],
  testURL: 'https://feyz.li'
}
