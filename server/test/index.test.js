describe('GET /api/v1', () => {
  let chai
  let chaiHttp
  let app
  let expect

  before(async () => {
    // Importa dinámicamente chai y chai-http
    const chaiModule = await import('chai')

    const chaiHttpModule = await import('chai-http')
    chai = chaiModule.default || chaiModule
    chaiHttp = chaiHttpModule.default || chaiHttpModule

    chai.use(chaiHttp)
    // Importa dinámicamente la app Express
    const appModule = await import('../src/index.js')
    app = appModule.default || appModule // Usa appModule.default si el módulo tiene una exportación por defecto

    expect = chai.expect
  })

  it('should return a 200 status code in /files/data', (done) => {
    chai.request(app)
      .get('/api/v1/files/data')
      .end((err, res) => {
        if (err) return done(err)
        try {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object').and.haveOwnProperty('data')
          expect(res.body.data).to.be.an('array')
          done()
        } catch (err) {
          done(err)
        }
      })
  })

  it('should return a 200 status code in /files/list', (done) => {
    chai.request(app)
      .get('/api/v1/files/list')
      .end((err, res) => {
        if (err) return done(err)
        try {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object').and.haveOwnProperty('data')
          expect(res.body.data).to.be.an('array')
          done()
        } catch (err) {
          done(err)
        }
      })
  })
})
