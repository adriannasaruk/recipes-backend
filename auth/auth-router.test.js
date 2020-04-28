const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig")

describe(" Auth-router", function() {
  describe(" POST /register", function() {
    it("should return new user with text/html", function() {
      return request(server)
        .post("/api/auth/register")
        .then(res => {
          expect(res.type).toMatch("text/html");
        });
    });
  });
  describe(" POST /register err", function() {
    it("should not return JSON", function() {
      return request(server)
        .post("/api/auth/register")
        .then(res => {
          expect(res.type).not.toMatch(/json/i);
        });
    });
  });
  describe("  POST /login", function() {
    it("should return JSON", function() {
      return request(server)
        .post("/api/auth/login")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
  describe(" POST /login err", function() {
    it("should not match text/html", function() {
      return request(server)
        .post("/api/auth/login")
        .then(res => {
          expect(res.type).not.toMatch("text/html");
        });
    });
  });
});

describe("server", function () {
    describe("/api/auth/register", function () {
        beforeEach(async () => {
            await db("users").truncate()
        })
        it("should return 201 on success", function () {
            let user = {username: "adrian", password: "Hello"}
            return request(server)
            .post('/api/auth/register')
            .send(user)
            .then(res => {
                expect(res.status).toBe(201);
                expect(res.body.message).toBe("You are registered!")
            })
        })
    })

        
    describe("/login", function () {
        it("should return 201 on success", function () {
            let user = {username: "adrian", password: "Hello"}
            return request(server)
            .post('/api/auth/register')
            .send(user)
            .then(request(server)
            .post('/api/auth/login')
            .send(user)
            .then(res => {
                expect(res.body.message).toBe("Welcome!")
                expect(res.status).toBe(200);
                
            })
        )})
    })
})