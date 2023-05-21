const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", cors(), (req, res) => {})

app.post("/", async (req, res) => {
  const { email, pasword } = req.body

  try {
    const check = await collection.findOne({ email: email })
    if (check) {
      res.json("exist") // si l'email existe deja il renvoi la reponse exist
    } else {
      res.json("notexist")
    }
  } catch (e) {
    res.json("notexist")
  }
})

app.post("/signup", async (req, res) => {
  const { email, pasword } = req.body

  const data = {
    email: email,
    password: password,
  }

  try {
    const check = await collection.findOne({ email: email })
    if (check) {
      res.json("exist")
    } else {
      res.json("notexist")
      await collection.insertMany([data]) //ajoute les données
    }
  } catch (e) {
    res.json("notexist")
  }
})

app.listen(3000, () => {
  console.log("port connected")
})
