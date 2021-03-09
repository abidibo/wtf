import request from "supertest";
import server from "../src/server";

describe("User Endpoint", () => {
  it("Should return the complete users list", (done) => {
    request(server.app)
      .get("/user")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBe(100);
        done();
      });
  });
});

describe("User Detail Endpoint", () => {
  it("Should return a single user when existing id is given", (done) => {
    request(server.app)
      .get("/user/1")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.email).toBe("amcgahern0@nymag.com");
        done();
      });
  });

  it("Should return 404 when not existing id is given", (done) => {
    request(server.app)
      .get(`/user/${1e4}`)
      .expect("Content-Type", /json/)
      .expect(404)
      .then((response) => {
        expect(response.body.message).toBe("User not found");
        done();
      });
  });
});
