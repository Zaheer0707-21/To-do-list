var Name = document.getElementById("name")
var Age = document.getElementById("Age")
var gender = document.getElementById("gender")
var mail = document.getElementById("mail")
var course = document.getElementById("course")
var btn = document.getElementById("savebtn")

var tabsub = document.getElementById("tabsub")
    
  
     //funtion call for saving
   
function save() {
        // creating new elements  in html page 
         
           //table row and col
    var trdata = document.createElement("tr")
    var tddata = document.createElement("td")
           // table data
   
    var tage = document.createElement("td")
    var tgender = document.createElement("td")
    var tcourse = document.createElement("td")
    var tmail = document.createElement("td")
    var  taction=document.createElement("td")


       //text content .... get the text from the value of input

         tddata.textContent=Name.value
         tage.textContent=Age.value
         tcourse.textContent = "javascript"
         tmail.textContent =mail.value
         tgender.textContent ="male"
         taction.innerHTML= "<button onclick=remove(event) class='remove'> DELETE </button>"
     
        //append means linking the data to parent data
    tabsub.append(trdata)
    trdata.appendChild(tddata)
    
    trdata.append(tage)
    trdata.append(tcourse)
    trdata.append(tmail)
    trdata.append(tgender)
    trdata.append(taction)


}
  function remove(event){
       event.target.parentElement.parentElement.remove()
}
  



