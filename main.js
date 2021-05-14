const popup = document.querySelector('.chat-window');
const chatBtn = document.querySelector('.chat-button');
const submitBtn = document.querySelector('.submit1');
const chatArea = document.querySelector('.chatbody1');
const inputElm = document.querySelector('.input');


//   chat button toggler 

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})




// send message when click on submit button
submitBtn.addEventListener('click', ()=>{


  var aa = inputElm.value;
  if( aa === ''){return false;}
  else{
    let userInput = inputElm.value;
    var div = document.createElement("div");
    div.id="userqueries";
    div.innerHTML =`<div id="user1">${userInput}</div>`;
    chatArea.appendChild(div);

    inputElm.value = '';
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;}

});


//sedn message when press the Enter
document.addEventListener("DOMContentLoaded", () => {
  

  const inputField = document.getElementById("userinput");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      var bb = inputElm.value;
      if( bb === ''){return false;}
      else{
        let userInput = inputElm.value;

            var div = document.createElement("div");
            div.id="userqueries";
            div.innerHTML =`<div id="user1">${userInput}</div>`;
            chatArea.appendChild(div);

            inputElm.value = '';
            chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
      //addChat(input);
    }}
  });
});





var x = bot();

function bot(){
  
  let botInputField = "Hi! I'm Guido, University Query Assistant" 

  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<div id="bot1">${botInputField}</div>
                     <button id="botbutton" onclick="sendUniversityMsg()">University</button>
                     <button id="botbutton" onclick="sendHostelMsg()">Hostel</button>
                     <button id="botbutton" onclick="sendMessMsg()">Mess</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight; 
}


function botTyping(){
   var timestmp = "Bot typing ....... ";
  var botdiv = document.createElement("div");
  botdiv.id = "botqueries";
  botdiv.innerHTML =`<div id="timestamp">${timestmp}</div>`;
  chatArea.appendChild(botdiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


}
function sendUniversityMsg(){
  //user input append into chat area
  var admValue = "University";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

// create a fake time delay for bot is typing
  botTyping();
   
  setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 

    //create element from bot side
    var botDiv = document.createElement("div");
    botDiv.id = "botqueries";
    botDiv.innerHTML =`<button id="botbutton" onclick="sendAdmissionMsg()">Admissions</button>
                     <button id="botbutton" onclick="sendAcadamicsMsg()">Acadamics</button>
                     <button id="botbutton" onclick="sendCollegeMsg()">About Campus</button>
                     <button id="botbutton" onclick="sendAdministrationMsg()">Administration</button>
                     <button id="botbutton" onclick="sendExaminationMsg()">Examinations</button>
                     <button id="botbutton" onclick="sendDepartmentMsg()">Departments</button>
                     <button id="botbutton" onclick="sendPlacementMsg()">Placements</button>
                     <button id="botbutton" onclick="sendOrganizationMsg()">Organizatons</button>
                     <button id="botbutton" onclick="sendOtherMsg()">Others</button>`;
    chatArea.appendChild(botDiv);
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
    
   },1500);
  
}

function sendAdmissionMsg(){
  var admValue = "Admissions";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  botTyping();

   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 

  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<button id="botbutton" onclick="sendUpdatesMsg()">New Updates</button>
                     <button id="botbutton" onclick="sendHtoAMsg()">How to Apply</button>
                     <button id="botbutton" onclick="sendIDMsg()">Important Dates</button>
                     <button id="botbutton" onclick="sendDocMsg()">Documents</button>
                     <button id="botbutton" onclick="sendCWMsg()">College Website</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
}


function sendUpdatesMsg(){
  var admValue = "New Updates";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);

}

function sendHtoAMsg(){
  var admValue = "How to Apply";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendIDMsg(){
  var admValue = "Important Dates";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendDocMsg(){
  var admValue = "Documents";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendCWMsg(){
  var admValue = "College Website";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendAcadamicsMsg(){
  var admValue = "Acadamics";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 


  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<button id="botbutton" onclick="sendProgramsMsg()">Programs</button>
                     <button id="botbutton" onclick="sendARMsg()">Acadamic Regulations</button>
                     <button id="botbutton" onclick="sendACMsg()">Acadamic Calander</button>
                     <button id="botbutton" onclick="sendEatCMsg()">Education at Campus</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  },1500);
}

function sendProgramsMsg(){
  var admValue = "Programs";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendARMsg(){
  var admValue = "Acadamic Regulations";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendACMsg(){
  var admValue = "Acadamic Calander";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendEatCMsg(){
  var admValue = "Education at Campus";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendCollegeMsg(){
  var admValue = "About Campus";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 

  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<button id="botbutton" onclick="sendACLMsg()">About Campus Life</button>
                     <button id="botbutton" onclick="sendESMsg()">Education System</button>
                     <button id="botbutton" onclick="sendAandAMsg()">Achievements and Awards</button>
                     <button id="botbutton" onclick="sendGCMsg()">Governing Council</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  },1500);
}

function sendACLMsg(){
  var admValue = "About Campus Life";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendESMsg(){
  var admValue = "Education System";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendAandAMsg(){
  var admValue = "Achievements and Awards";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendGCMsg(){
  var admValue = "Governing Council";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendAdministrationMsg(){
  var admValue = "Administration";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 

  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<button id="botbutton" onclick="sendAdminMsg()">Administration</button>
                     <button id="botbutton" onclick="sendDFMsg()">Departments Faculty</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  },1500);
}

function sendAdminMsg(){
  var admValue = "Administration";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendDFMsg(){
  var admValue = "Departments Faculty";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendExaminationMsg(){
  var admValue = "Examinations";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);

}


function sendDepartmentMsg(){
  var admValue = "Departments";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);

}

function sendPlacementMsg(){
  var admValue = "Placements";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);

}

function sendOrganizationMsg(){
  var admValue = "Organizations";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<button id="botbutton" onclick="sendSWMsg()">Student Welfare</button>
                     <button id="botbutton" onclick="sendNccMsg()">NCC</button>
                     <button id="botbutton" onclick="sendNssMsg()">NSS</button>
                     <button id="botbutton" onclick="sendHHMsg()">Helping Hands</button>
                     <button id="botbutton" onclick="sendSMMsg()">Student Mitra</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
}

function sendSWMsg(){
  var admValue = "Student Welfare";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendNccMsg(){
  var admValue = "NCC";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendNssMsg(){
  var admValue = "NSS";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendHHMsg(){
  var admValue = "Helping Hands";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendSMMsg(){
  var admValue = "Student Mitra";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendOtherMsg(){
  var admValue = "Others";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<button id="botbutton" onclick="sendCcMsg()">Convocation</button>
                     <button id="botbutton" onclick="sendAluMsg()">Alumini</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
}

function sendCcMsg(){
  var admValue = "Convocation";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendAluMsg(){
  var admValue = "Alumini";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendHostelMsg(){
  var admValue = "Hostel";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  botTyping();

   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 

  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<button id="botbutton" onclick="sendHLifeMsg()">Hostel life</button>
                     <button id="botbutton" onclick="sendHDetailsMsg()">Hostel Details</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);

}

function sendHLifeMsg(){
  var admValue = "Hostel Life";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendHDetailsMsg(){
  var admValue = "Hostel Details";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendMessMsg(){
  var admValue = "Mess";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  botTyping();

   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 

  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<button id="botbutton" onclick="sendDiningMsg()">Dining Halls</button>
                     <button id="botbutton" onclick="sendMenuMsg()">Mess Menu</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
}

function sendDiningMsg(){
  var admValue = "Dining Halls";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}

function sendMenuMsg(){
  var admValue = "Mess Menu";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 



 //code





},1500);
}







