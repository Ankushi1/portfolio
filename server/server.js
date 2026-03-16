const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Portfolio backend running")
})

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body

  console.log("Message received:", name, email, message)

  res.json({ status: "Message received" })
})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})