const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig")


describe("server", function () {
    describe("/api/public", function () {
        beforeEach(async () => {
            await db("public").truncate()
            })
        it("should return 201 on success", function () {
            return request(server)
            .get("/api/public")
            .then (res => {
                expect(res.status).toBe(201)
                expect(res.body.message).toBe("Here are the recipes:")
            })
        })
    })
})