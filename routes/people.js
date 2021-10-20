const express = require('express')
const router = express.Router()
const {getPeople,
       postPeople,
       postPeoplePostman,
       updatePeople,
       deletePeople} = require('../controller/people')

//get
router.get('/',getPeople) 

//post
router.post('/',postPeople)
router.post('/postman',postPeoplePostman)

//put
router.put('/:id',updatePeople)

//delete
router.delete('/:id',deletePeople)

module.exports = router