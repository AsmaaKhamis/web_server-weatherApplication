const tasks ={
    tasks: [{
        text:'Grocery Shopping',
        completed:true
    },{
        text:'Clean yard',
        completed:false

},{
    text:' Filme course',
    completed:false
}],
getTasksToDo(){
    return this.tasks.filter((task) =>task.completed === false )

  }
}
console.log(tasks.getTasksToDo())