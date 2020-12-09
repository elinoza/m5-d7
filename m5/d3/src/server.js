const express = require("express")
const cors = require("cors")
const listEndpoints = require("express-list-endpoints")
const projectsRouter = require("./services/projects")
const studentsRouter = require("./services/students")
const problematicRoutes = require("./services/problematicRoutes")
const {
  notFoundHandler,
  unauthorizedHandler,
  forbiddenHandler,
  BadRequestHandler,
  catchAllHandler,
} = require("./errorHandling")

const server = express()

const port = process.env.PORT || 3003

const loggerMiddleware = (req, res, next) => {
  console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`)
  next()
}
server.use(cors())

//this line must be above of server.use()
server.use(express.json())
server.use(loggerMiddleware)

server.use("/students", studentsRouter)
server.use("/projects", projectsRouter)
server.use("/problems", problematicRoutes)

// ERROR HANDLERS

server.use(notFoundHandler)
server.use(unauthorizedHandler)
server.use(forbiddenHandler)
server.use(BadRequestHandler)
server.use(catchAllHandler)


// console.log(listEndpoints(server))


server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})