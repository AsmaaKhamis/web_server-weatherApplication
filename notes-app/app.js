const chalk =require('chalk')
const yargs = require('yargs')
const get = require('./notes.js')
//  const msg =get()
// console.log(msg)
// console.log(chalk.blue.bold.bgWhite('Hello!'))

// customize your version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note!')
    }

})

// create remove command 
yargs.command({
    command:'remove',
    describe: 'remove a note',
    handler:function(){
        console.log('Removing the note!')
    }
})
// listing the notes
yargs.command({
    command:'list',
    describe:'list the command',
    handler:function(){
        console.log('List the notes!')
    }
})
// read the notes
yargs.command({
    command:'read',
    describe:'read the command',
    handler:function(){
        console.log('Read the notes!')
    }
})








// add, removr , read , list
console.log(yargs.argv)




// const command =process.argv[2]
// if(command === 'add'){
//     console.log('Adding nayes!')
// }else if( command === 'remove'){
//     console.log('removing notes !')
// }



