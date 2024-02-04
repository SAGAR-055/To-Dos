import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'
import { getDatabase, ref, push , onValue , remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://to-dos-1e6bd-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database =  getDatabase(app)
const Todos = ref(database , "TOdoList")

const addbtn= document.getElementById("add-btn")
const ipt = document.getElementById("inputel")
const addtask = document.getElementById("tasks")
const donetasks = document.getElementById("Completed-list")

 
addbtn.addEventListener("click", function(){
   let InputValue = ipt.value
   push(Todos,InputValue) 
   
   clearInput()
})


onValue(Todos , function(snapshot){
   if(snapshot.exists()){
    let itemsArray = Object.entries(snapshot.val())
    clearthelist()
      for(let i =0 ; i<itemsArray.length; i++){
           let currentItems = itemsArray[i]
           let currentItemsId = currentItems[0]
           let currentItemsvalues = currentItems[1]
      appendItemsToTodos(itemsArray[i])
  }
}
else{
    addtask.innerHTML = "No task here... yet"
}
})


function clearthelist(){
    addtask.innerHTML = ""

}

function clearInput(){
    ipt.value ='';
}  

function appendItemsToTodos(items){
    // addtask.innerHTML +=`<li>${items}</li>`
    let itemID = items[0]
    let itemValues =items[1]
    let newEl = document.createElement("li")
    newEl.textContent = itemValues
    
    
    newEl.addEventListener("dblclick", function(){
     let exactloactionofList  = ref(database, `TOdoList/${itemID}`)
     remove(exactloactionofList)
      
     const completedItem = document.createElement("li");
     completedItem.textContent = itemValues;
     donetasks.appendChild(completedItem);
      

    })


    addtask.append(newEl)
    
}


