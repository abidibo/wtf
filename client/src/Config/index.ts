export default {
  api: {
    // @TODO set in env var
    basePath: 'http://localhost:3000',
  },
  paths: {
    dashboard: '/',
    userDetail: '/user/:id',
    pageNotFound: '/404'
  }
}
