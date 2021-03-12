import config from '../Config'

describe('Configuration', () => {
  it('should define an API base path', () => {
    expect(config.api.basePath === undefined).toBe(false)
  })

  it('should contain the right paths', () => {
    expect(config.paths.dashboard === undefined).toBe(false)
    expect(config.paths.userDetail === undefined).toBe(false)
    expect(config.paths.pageNotFound === undefined).toBe(false)
  })
})
