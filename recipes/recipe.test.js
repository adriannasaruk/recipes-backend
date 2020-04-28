const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig")


describe("server", function () {
    describe("/api/recipes", function () {
        beforeEach(async () => {
            await db("recipes").truncate()
            })
        it("should return 400 if I'm not logged in", function () {
            return request(server)
            .get("/api/recipes")
            .then (res => {
                expect(res.status).toBe(400)
                expect(res.body.errorMessage).toBe("No credentials provided")
            })
        })
    })
})