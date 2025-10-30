const express = require("express")

const app = express()

app.listen(2564, () => {
    console.log("Listening to port: 2564")
})

// app.get('/', (req, res) => {
//     res.end("What the hell is goi ot")
// })
// app.get('/apple', (req, res) => {
//     res.end("<h1>Hi Dagim sime</h1>")
// })
app.use(express.static("apple"))