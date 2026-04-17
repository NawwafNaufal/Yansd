const app = require("./index")

const port = 3001

app.listen(port,() => {
    console.log("server connect in port ", port)
})