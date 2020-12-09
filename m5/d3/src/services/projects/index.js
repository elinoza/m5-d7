const express = require("express")
const fs = require("fs")
const path = require("path")
const uniqid = require("uniqid")

const router = express.Router()

const readFile = fileName => {
  const buffer = fs.readFileSync(path.join(__dirname, fileName))
  const fileContent = buffer.toString()
  return JSON.parse(fileContent)
}

// FOR GETTING ALL PROJECTS
router.get("/", (req, res) => {
  const projectsDB = readFile("projects.json")
  
  res.send(projectsDB)
})
/// getting project with an id
router.get("/:id", (req, res) => {
  const projectsDB = readFile("projects.json")
  const project= projectsDB.filter(project=> String(project.ID) === req.params.id)
  res.send(project)
})
/// getting project with specific query (ask luis aboout it??)
router.get("/", (req, res) => {
  const projectsDB = readFile("projects.json")
  if (req.query && req.query.name) {
    const filteredprojects = projectsDB.filter(
      project =>
        project.hasOwnProperty("name") &&
        project.name.toLowerCase() === req.query.name.toLowerCase()
    )
    res.send(filteredprojects)
  } else {
    res.send(projectsDB)
  }
})

///POSTING NEW PROJECT
router.post("/", (req, res) => {
  const projectsDB = readFile("projects.json")
  const newProject = {
    ...req.body,
    ID: uniqid(),
    modifiedAt: new Date(),
  }

  projectsDB.push(newProject)
//  replace old content in the file with new array
  fs.writeFileSync(path.join(__dirname, "projects.json"), JSON.stringify(projectsDB))

  res.status(201).send({ id: newProject.ID })
})

//deleting by id
router.delete("/:id", (req, res) => {
  const projectsDB = readFile("projects.json")
  const project = projectsDB.filter(project => String(project.ID) !== req.params.id)
  fs.writeFileSync(path.join(__dirname, "projects.json"), JSON.stringify(project))

  res.status(204).send()
})

///EDITIN' BY ID
router.put("/:id", (req, res) => {
  const projectsDB = readFile("projects.json")
  const project = projectsDB.filter(project => String(project.ID) !== req.params.id)

  const modifiedUser = {
    ...req.body,
    ID: req.params.id,
    modifiedAt: new Date(),
  }

  project.push(modifiedUser)
  fs.writeFileSync(path.join(__dirname, "projects.json"), JSON.stringify(project))

  res.send({ id: modifiedUser.ID })
})

module.exports = router