let alertsDropdown=document.getElementById("alertsDropdown");
let alertDetails=document.getElementById("alertDetails");
alertDetails.style.display="none";
alertsDropdown.addEventListener("click",()=>{
  if (alertDetails.style.display=="none") {
    alertDetails.style.display="";
    messageAlertDetails.style.display="none";

  }
  else{
    alertDetails.style.display="none";
  }
})

let messagesDropdown=document.getElementById("messagesDropdown");
let messageAlertDetails=document.getElementById("messageAlertDetails");
messageAlertDetails.style.display="none";

messagesDropdown.addEventListener("click",()=>{
  if (messageAlertDetails.style.display=="none") {
    messageAlertDetails.style.display="";
    alertDetails.style.display="none";

  }
  else{
    messageAlertDetails.style.display="none";
  }
})
function openNav() {
        if (document.getElementById("mySidenav").style.width === "63px" || document.getElementById("mySidenav").style.width==="") {
          document.getElementById("mySidenav").style.width = "250px";
        }
        else{
          if (window.screen.width<=767) {
            document.getElementById("mySidenav").style.width = "";
          }
          else{
            document.getElementById("mySidenav").style.width = "63px";
          }
        }
}

let adminSettingBox=document.getElementById("adminSettingBox");
adminSettingBox.style.display="none";
let dropbtnMyfunction=document.getElementById("dropbtnMyfunction");
dropbtnMyfunction.addEventListener("click",()=>{
  if (adminSettingBox.style.display==="none") {
      adminSettingBox.style.display="";
  } else {
    adminSettingBox.style.display="none";
  }
})
