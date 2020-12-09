const express = require("express")
const cors = require("cors")
const listEndpoints = require("express-list-endpoints")
const projectsRouter = require("./services/projects")
const studentsRouter = require("./services/students")

const server = express()

const port = process.env.PORT || 3003
server.use(cors())

//this line must be above of server.use()
server.use(express.json())

server.use("/students", studentsRouter)

server.use("/projects", projectsRouter)


console.log(listEndpoints(server))


server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})