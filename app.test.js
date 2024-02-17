const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  let server;

  // Start the server before running the tests
  beforeAll((done) => {
    // Use dynamic port from app.js or default to 3000
    const port = app.get('port') || 3000;
    server = app.listen(port, () => {
      console.log(`Server started on port ${port}`);
      done();
    });
  });

  // Close the server after running the tests
  afterAll((done) => {
    server.close(done);
  });

  // Test the root endpoint
  it('responds with "Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World!');
    expect(response.statusCode).toBe(200);
  });
});
