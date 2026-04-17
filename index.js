const express = require("express")

const app = express()

app.use(express.json())


app.get("/Local",(req,res) => {
    res.status(200).json({
        message : "Datadgahdidddn"
    })
})

module.exports = app