const addbtn= document.getElementById("add-btn")
const ipt = document.getElementById("inputel")
addbtn.addEventListener("click", function(event){
   let InputValue = ipt.value
    
   
   let addtask = document.getElementById("tasks")
   addtask .innerHTML +=`<li>${InputValue}</li>`
    
   clearInput()
})



function clearInput(){
    ipt.value ='';
}  
