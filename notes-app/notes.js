const chalk =require('chalk')
const fs =require('fs')
const { title } = require('process')
const addNote =(title,body) =>{
    const notes =loadNote()
    // check if the title you added is alresdy in use
    const duplicateNotes = notes.filter((note) => note.title ===title)
    const duplicateNote = notes.find((note) => note.title ===title)
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title ===title
    // })
    // const duplicateNotes = notes.filter((note) =>{
    //     return note.title ===title
    // })
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))

    } else{
        console.log(chalk.red.inverse('Note title is taken !'))
    }

  

}
const removeNote = (title) => {
    const notes =loadNote()
    const ifExisting =notes.filter((note) => {
        return note.title !== title
    })
    saveNotes(ifExisting)
    if(notes.length >ifExisting.length){
       console.log(chalk.green.inverse('Note removed !'))
    } else{
        console.log(chalk.red.inverse('no note found !'))
    }
}

const saveNotes = (notes) =>{
    const dataJson =JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}
 const loadNote =()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJson =dataBuffer.toString()
        return JSON.parse(dataJson)

    } catch(e){
        return []
    }



 }
 const listNotes = () =>{
    const notes =loadNote()
    console.log(chalk.yellow.inverse('My Notes'))
    notes.forEach((note) => {

        console.log(note.title)
    })

 }
 const readNote =(title)=>{
    const notes =loadNote() 
    const searchNote = notes.find((note) => note.title ===title)
    if(searchNote){
        console.log(chalk.inverse.yellow(searchNote.title) )
        console.log(searchNote.body)
    } else {
        console.log(chalk.inverse.red('Note not found') )
    }
 }
module.exports = {
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote

}

