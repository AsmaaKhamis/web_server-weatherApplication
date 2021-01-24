 const chalk =require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
//  const msg =get()
// console.log(msg)
// console.log(chalk.blue.bold.bgWhite('Hello!'))

// customize your version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }

    },
    handler(argv){
       notes.addNote(argv.title, argv.body)
    },
  

})

// create remove command 
yargs.command({
    command:'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }

    },
    handler(argv){
        notes.removeNote(argv.title)    
    }
})
// listing the notes
yargs.command({
    command:'list',
    describe:'list the command',
    handler:function(argv){
        notes.listNotes(argv.title, argv.body)
    }
})
// read the notes
yargs.command({
    command:'read',
    describe:'read the command',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }

    },
    handler(argv){
        notes.readNote(argv.title)
    }
})


// add, removr , read , list
// console.log(yargs.argv)
// that line doing the same job as the above
yargs.parse()





// const command =process.argv[2]
// if(command === 'add'){
//     console.log('Adding nayes!')
// }else if( command === 'remove'){
//     console.log('removing notes !')
// }



