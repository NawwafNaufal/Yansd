const request = require("supertest")
const app = require("./index")


describe("GET /Local",() => {
    it("Should be Local", async () => {
        const res = await request(app).get("/Local")

        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({
            message: "Hello Welcome to the kalibler"
        })
    })
})