const request = require("supertest")
const app = require("./Main")


describe("GET /Local",() => {
    it("Should be Local", async () => {
        const res = await request(app).get("/Local")

        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({
            message: "Data"
        })
    })
})