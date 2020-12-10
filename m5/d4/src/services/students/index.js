/*

1. get all users on url --> localhost:3002/students
2. get single user on url --> localhost:3002/students:id
3. create a single user --> localhost:3002/students
4. modify a single user --> localhost:3002/students:id
5. delete a single user --> localhost:3002/students:id

All the routes in this file will have the /students prefix
*/

const express = require("express") // third party module
const fs = require("fs") // core module
const path = require("path") // core module
 const uniqid = require("uniqid") // third party module

const router = express.Router()

// 1.router.get("/")

router.get("/", (req, res) => {
   // handler
  // console.log(__dirname) // current directory
  // console.log(path.join(__dirname, "users.json")) // this is the correct way to concatenate two paths
  // console.log(__dirname + "\\users.json") // Do not concatenate paths in this way, use path.join()
  const usersFilePath = path.join(__dirname, "students.json")
  // a) Retrieve the list from a file on disk (users.json), because we don't have a real database yet!
  const fileAsABuffer = fs.readFileSync(usersFilePath) // returns a buffer (machine readable, not human readable)!!!
  // b) we get a buffer so this must be converted to something readable (like a String)
  const fileAsAString = fileAsABuffer.toString()
  // c) I want to send the list as a response but in the form of a JSON (not a String)

  const usersArray = JSON.parse(fileAsAString)

  // d) Now I can finally send it as a response
  res.send(usersArray)

})
  
// 2. router.get("/:id")

router.get("/:identifier", (req, res) => {
    // handler
  
    // 1. read the content from the file
    const usersFilePath = path.join(__dirname, "students.json")
    const fileAsABuffer = fs.readFileSync(usersFilePath)
    const fileAsAString = fileAsABuffer.toString()
    const usersArray = JSON.parse(fileAsAString)
  
    // 2. grab the id from the url
    const idComingFromRequest = req.params.identifier
    console.log("---------------->", idComingFromRequest)
  
    // 3. filter the array searching for that id
    const student = usersArray.filter(student => String(student.ID) === idComingFromRequest)
    console.log("student ", student)
  
    // 4. send the found user back as a response
    res.send(student)
  })



  // 3. router.post("/")

    router.post("/", (req, res) => {
    // handler
  
    // 1. read the old content from the file
    const usersFilePath = path.join(__dirname, "students.json")
    const fileAsABuffer = fs.readFileSync(usersFilePath)
    const fileAsAString = fileAsABuffer.toString()
    const usersArray = JSON.parse(fileAsAString)
  
    // 2. push new user to usersArray
  
    // 2.1 let's create a unique identifier for him
  
    const newUser = req.body
    newUser.ID = uniqid()
    usersArray.push(newUser)
    console.log(newUser)
  
    // 3. replace old content in the file with new array
  
    fs.writeFileSync(usersFilePath, JSON.stringify(usersArray))
  
    res.send({ id: newUser.ID })
    //res.send("succesfull")
  })

module.exports = router

