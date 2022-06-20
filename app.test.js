const app = require("./server");
const request = require("supertest");
beforeAll(  (done) => {
  console.log("EXTRA VIRGIN OLIVE OIL");
  done()
});
afterAll(  (done) => {
  console.log("OLIVE OIL");
  app.close();
  done()
});
let endPointGet = [
  { url: `/endpoint1` },
  { url: `/endpoint2` },
  { url: `/endpoint3` },
  { url: `/endpoint4` }
];
let endPointPost = [
  { url: `/endpoint1`, data: { body: "My Body" } },
  { url: `/endpoint2`, data: { body: "My Body" } },
  { url: `/endpoint3`, data: { body: "My Body" } },
  { url: `/endpoint4`, data: { body: "My Body" } },
];

for (let i in endPointPost) {
  describe("TEST ENDPOINT FOR POST METHOD", () => {
    describe(`POST ${endPointPost[i].url}`, () => {
      test("END POINT MUST BE WORKING", (done) => {
        request(app)
          .post(endPointPost[i].url)
          .send(endPointPost[i].data)
          .end((err, res) => {
            if (err) {
              return done(err);
            } else {
              expect(res.status).toBe(200);
              expect(res.body).toHaveProperty("body", expect.any(String));
              return done();
            }
          });
      });
    });
  });
}

for (let i in endPointGet) {
  describe("TEST ENDPOINT FOR GET METHOD", () => {
    describe(`GET ${endPointGet[i].url}`, () => {
      test("END POINT MUST BE WORKING", (done) => {
        request(app)
          .get(endPointGet[i].url)
          .end((err, res) => {
            if (err) {
              return done(err);
            } else {
              expect(res.status).toBe(200);
              expect(res.body).toHaveProperty("msg", expect.any(String));
              return done();
            }
          });
      });
    });
  });
}
