/*

  settings.js
  Aaron Romel
  
  Send ajax requests to server for actions of changing account password and
  changing profile display name. Also contains animation code for animated
  sprites on page

*/

const YELLOW_FRAMES = 8; // number of yellow monster frames
let yellowFrame = 1;
let pinkBlue = 1;        // pink and blue animate slower they only have 2 frames

// animation function for sprites
const walkAnimation = () => {
  
  yellowFrame += 1;
  if (yellowFrame > YELLOW_FRAMES) yellowFrame = 1;
  let imgSrc = `yellow-${yellowFrame}.png`;
  $('#yellow-enemy').attr('src', `assets/img/walk/${imgSrc}`);
  
  if (yellowFrame > 3) {
    pinkBlue = 2;
  } else {
    pinkBlue = 1;
  }
  
  imgSrc = `blue-${pinkBlue}.png`;
  $("#blue-enemy").attr('src', `assets/img/walk/${imgSrc}`);
  
  imgSrc = `pink-${pinkBlue}.png`;
  $("#pink-enemy").attr('src', `assets/img/walk/${imgSrc}`);
}

$(document).ready(() => {
  
  // add event listener for enter key to submit forms
  document.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
      let active = document.activeElement.id;
      if (active === "newName") {
        document.querySelector("#nameSubmit").click();
      } else if (active === "oldpass" || active === "newpass" || active === "newpass2") {
        document.querySelector("#passSubmit").click();
      }
    }
  });
  
  // slide in th animated sprites
  $("#yellow-enemy").show("slide", { direction: "left" }, 500);
  $("#blue-enemy").delay(400).show("slide", { direction: "left" }, 500);
  $("#pink-enemy").delay(800).show("slide", { direction: "left" }, 500);

  // start animations
  setInterval(walkAnimation, 100);
  
  $('#settings').show("slide", { direction: "up" }, 500, () => {
    document.querySelector("#newName").focus();
  });
  
  // handle errors that come back from server
  const handleError = (message) => {
    
    $("#errorMessage").text(message);
    $("#error").show('bounce', {}, 500);
    
  }
  
  // send ajax request with form data
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
  
  // prevent default form submission behaviors for both forms
  $("#nameForm").on("submit", (e) => {
    e.preventDefault();
    return false;
  });
  
  $("#passForm").on("submit", (e) => {
    e.preventDefault();
    return false;
  });
  
  //handle signup submission
  $("#nameSubmit").on("click", (e) => {
    e.preventDefault();
    
    $("#error").hide();
    
    if ($("#newName").val() == '') {
      handleError('display name cannot be empty');
      return false;
    }
    
    sendAjax($("#nameForm").attr("action"), $("#nameForm").serialize());
    
    return false;
  });
  
  // handle password submission, check for empty/not matching fields before sending
  // request
  $("#passSubmit").on("click", (e) => {
    e.preventDefault();
    
    $("#error").hide();
    
    if($("#oldpass").val() == '' || $("#newpass").val() == '' || $("#newpass2").val() === '') {
      handleError('A field is missing');
      return false;
    }
    
    if ($("#newpass").val() !== $("#newpass2").val()) {
      handleError("New passwords don't match");
      return false;
    }
    
    sendAjax($("#passForm").attr("action"), $("#passForm").serialize());
    
    return false;
  });
  
});