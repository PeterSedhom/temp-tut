const { people } = require('../data')

const getPeople = (req,res)=>{
    res.status(200).json({success:true,data:people})
}

const postPeople = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false})
    }
    res.status(201).json({success:true,person:name})
}

const postPeoplePostman = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false})
    }
    res.status(201).json({success:true,data:[...people,name]})
}

const updatePeople = (req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person) => person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false})
    }
   const newPerson = people.map((person) => {
        if(person.id == Number(id)){
            person.name = name
        }
        return person
   })
   return res.status(200).json({data:newPerson})
}

const deletePeople = (req,res)=>{
    const {id} = req.params
    const person = people.find((person) => person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false})
    }
    const newPeople = people.filter((person) => person.id !== Number(id))
    return res.status(200).json({data:newPeople})
}

module.exports= 
{getPeople,postPeople,postPeoplePostman,updatePeople,deletePeople}