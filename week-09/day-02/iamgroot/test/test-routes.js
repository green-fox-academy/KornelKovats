const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  request(app)
    .get('/groot')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const expectedThings = { error: 'I am Groot!' };
      const actualThings = res.body;
      t.error(err, 'No error');
      t.same(actualThings, expectedThings, 'Retrieve list of things');
      t.end();
    });
});
test('groot endpoint with query string', (t) => {
  request(app)
    .get('/groot?message=asdasd')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const expectedThings = {
        received: 'asdasd',
        translated: 'I am Groot!',
      };
      const actualThings = res.body;
      t.error(err, 'No error');
      t.same(actualThings, expectedThings, 'Retrieve list of things');
      t.end();
    });
});

test('yondu endpoint without query string', (t) => {
  request(app)
    .get('/yondu')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const expectedThings = { error: 'can not calculate the speed' };
      const actualThings = res.body;
      t.error(err, 'No error');
      t.same(actualThings, expectedThings, 'Retrieve list of things');
      t.end();
    });
});
test('yondu endpoint with query string', (t) => {
  request(app)
    .get('/yondu?distance=100.0&time=10.0')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const expectedThings = {
        distance: 100.0,
        time: 10.0,
        speed: 10.0,
      };
      const actualThings = res.body;
      t.error(err, 'No error');
      t.same(actualThings, expectedThings, 'Retrieve list of things');
      t.end();
    });
});
