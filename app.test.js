const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(3000, () => { // Update the port to match your app.js file
      console.log('Server started');
      done();
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  it('responds with "Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World!');
    expect(response.statusCode).toBe(200);
  });
});
