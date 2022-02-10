// const getId = document.getElementById('btn-green')

// function that can change the background color
function makeRed(){
    document.body.style.backgroundColor = "red"
}


// id which is added as addEventListener function 
  document.getElementById('btn-green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
  })
    
//p tag innertext change handler
document.getElementById('addNum').addEventListener('click', function(e){
   // let count = e.target.value 

   let p  = document.getElementById('demo')
    p.innerText = 'Bangladesh'
 })


 //imput field value showing on innerText area
 document.getElementById('btn-update').addEventListener('click', function(){
    const nameField = document.getElementById('name-field')
    
    const demoCall = document.getElementById('demo2')
    demoCall.innerText = nameField.value;
    
})