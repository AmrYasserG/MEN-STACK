const request = require("supertest");
const serv = require("./server");
describe("Test example", () => {
    test("GEt all flights", (done) => {
      request(serv)
        .get("/flights/getAllFlights")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
          res.data.length = 1;
          res.data[0].FlightNumber="MBA123";
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        });
    });
   
  });

