const express = require("express")

const router = express.Router()

router.get("/problem", (req, res) => {
  throw new Error("we have a problem!")
})

router.get("/nonExistant", (req, res, next) => {
  const err = new Error("not found!!")
  err.httpStatusCode = 404
  next(err)
})

router.get("/forbiddenRoute", (req, res, next) => {
  const err = new Error("Forbidden Route!")
  err.httpStatusCode = 403
  next(err)
})

router.get("/anotherProblem", (req, res, next) => {
  const err = new Error("another error here!")
  next(err)
})

module.exports = router