module.exports = {
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./test/global.js'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!(imask)/)'],
  testURL: 'https://feyz.li',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub'
  }
}
