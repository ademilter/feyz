module.exports = {
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/test/global.js'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!(imask)/)'],
  testPathIgnorePatterns: ['<rootDir>/cypress'],
  testURL: 'https://feyz.li',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub'
  }
}
