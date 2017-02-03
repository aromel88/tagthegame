/*

  profile.js
  Aaron Romel
  
  Send ajax requests to server for actions such as joining a game,
  changning account password and changing profile display name
  Also has animation code for animated sprites on page

*/

let frame = 1;  // frame counter for animation

// animate walking sprite on pate
const walkAnimation = () => {
  frame += 1;
  if (frame > 6) frame = 1;
  const imgSrc = `frame-${frame}.png`;
  $('#walk').attr('src', `assets/img/walk/${imgSrc}`);
}

$(document).ready(() => {
  setInterval(walkAnimation, 100);
  
  // have the player walk into position
  $("#animation").show("slide", { direction: "left" }, 3000);
  
  document.querySelector("#roomName").focus();
  
  // prevent default keyup action, instead submit form
  // if input has focus
  document.addEventListener("keyup", (e) => {
    if (e.keyCode === 13 && document.activeElement.id === "roomName") {
      e.preventDefault();
      e.stopPropagation();
      document.querySelector("#roomJoinSubmit").click();
      return false;
    }
  });
  
  // handle error returning from ajax requests
  const handleError = (message) => {
        $("#errorMessage").text(message);
        $("#error").show('bounce', {}, 500);
    }
    
  
  // send ajax request to server with form data
    const sendAjax = (action, data) => {
        $.ajax({
            cache: false,
            type: "POST",
            url: action,
            data: data,
            dataType: "json",
            success: (result, status, xhr) => {
                $("#error").hide();

                window.location = result.redirect;
            },
            error: (xhr, status, error) => {
                const messageObj = JSON.parse(xhr.responseText);
            
                handleError(messageObj.error);
            }
        });        
    }
  
  // prevent room form from automatically submitting
  $("#roomForm").on("submit", (e) => {
    e.preventDefault();
    return false;
  });
  
  // submit on click (or enter press) of romm click a-tag
  $("#roomJoinSubmit").on("click", (e) => {
        e.preventDefault();
        $("#error").hide();
        
        let displayNameInput = document.querySelector("#displayName");
        if (displayNameInput !== null) {
          if (displayNameInput.value === "") {
            handleError("A display name is required");
          }
        } 
        
    
        if($("#roomName").val() == '') {
            handleError("Room name must have a value!");
            return false;
        }

        sendAjax($("#roomForm").attr("action"), $("#roomForm").serialize());
        
        return false;
  });
  
  $("#singleSubmit").on('click', (e) => {
    e.preventDefault();
    $("#error").hide();
    
    window.location = '/singleGame/1';
  });
});

