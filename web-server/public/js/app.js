console.log('Client side javascript file is loaded')

// fetch('http://puzzel.mead.io/puzzel').then( (response) => {
//     response.json().then( (data) => {
//         console.log(data)
//     })
// })


// querySelectotor target the first element it saw
// ex: the first form ,the first input ,the first p
// to solve that problem you must provide unique ID
 const weatherDocument = document.querySelector('form')
 const search =document.querySelector('input')
 const messageOne =document.querySelector('#message-1')
 const messageTwo =document.querySelector('#message-2')

 weatherDocument.addEventListener('submit' , (e) => {
     e.preventDefault()
     
     const locationA = search.value
     messageOne.textContent='loading...'
     messageTwo.textContent=''


  fetch('/weather?address='+ locationA +'').then( (response)=>{
    response.json().then( (data) =>{
        if(data.error){
            messageOne.textContent=data.error
            messageTwo.textContent=''
        }else{
            messageOne.textContent=data.location
            messageTwo.textContent=data.forcast
          }
       })
    })
 })