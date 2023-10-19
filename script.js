import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://to-dos-1e6bd-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database =  getDatabase(app)
const Todos = ref(database , "TOdoList")

const addbtn= document.getElementById("add-btn")
const ipt = document.getElementById("inputel")
const addtask = document.getElementById("tasks")

addbtn.addEventListener("click", function(){
   let InputValue = ipt.value
    push(Todos,InputValue) 
   
   
   appendItemsToTodos(InputValue)
    
   clearInput()
})

function clearInput(){
    ipt.value ='';
}  

function appendItemsToTodos(itemsValues){
    addtask.innerHTML +=`<li>${itemsValues}</li>`
}
