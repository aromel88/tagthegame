/*

  login.js
  Aaron Romel
  Provide event handling for profile forms and allow for error checking
  before interacting with the server.
  Sends ajax requests to server with information regarding logins and sign ups

*/

$(document).ready(() => {
  
  // handle keyup events for enter key
  // prevent default behavior and instead simulate
  // click function of link depending on which
  // input (if any) is the active element
  document.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      let active = document.activeElement;
      if (active.id === "l_user" || active.id === "l_pass") {
        document.querySelector("#loginSubmit").click();
      } else if (active.id === "s_user" || active.id === "s_pass" || active.id === "s_pass2") {
        document.querySelector("#signupSubmit").click();
      }
      
    }
  });
  
  // show hidden elements with animatons when page loads
  $('#hero-red').delay(500).show("slide", { direction: "left" }, 500);
  $('#hero-green').delay(800).show("slide", { direction: "left" }, 500);
  
  $('#login').delay(1000).show("slide", { direction: "up" }, 500, () => {
    // when document is ready put username field in focus
    document.querySelector("#l_user").focus();
  });
  
  
  // click event for signup link hides sign in and shows sign up
  $("#signuplink").on("click", (e) => {
    e.preventDefault();
    
    $("#login").hide("slide", { direction: "up" }, 500);
    $("#signup").delay(500).show("slide", { direction: "down" }, 500, () => {
      $("#loginError").hide();
      document.querySelector("#s_user").focus();
    });
    
  });
  
  
  // clicking back link hides sign up and shows sign in
  $("#backlink").on("click", (e) => {
    e.preventDefault();
    
    $("#signup").hide("slide", { direction: "down" }, 500);
    $("#login").delay(500).show("slide", { direction: "up" }, 500, () => {
      $("#signupError").hide();
      document.querySelector("#l_user").focus();
    });
    
  });
  
  // handle errors that come back from server
  const handleError = (message) => {
    
    if ($("#signup").css("display") === "none") {
      $("#loginErrorMessage").text(message);
      $("#loginError").show('bounce', {}, 500);
    } else {
      $("#signupErrorMessage").text(message);
      $("#signupError").show('bounce', {}, 500);
    }
  }
  
  // send ajax request to server containing form data
  const sendAjax = (action, data) => {
    $.ajax({
      cache: false,
      type: "POST",
      url: action,
      data: data,
      dataType: "json",
      success: (result, status, xhr) => {
        $("#loginError").hide();
        $("#signupError").hide();
        
        window.location = result.redirect;
      },
      error: (xhr, status, error) => {
        const messageObj = JSON.parse(xhr.responseText);
        
        handleError(messageObj.error);
      }
    });
  }
  
  //handle signup submission
  $("#signupSubmit").on("click", (e) => {
    e.preventDefault();
    
    $("#error").hide();
    
    if ($("#s_user").val() == '' || $("#s_pass").val() == '' || $("#s_pass2").val() == '') {
      handleError('All fields are required');
      return false;
    }
    
    if ($("#s_pass").val() !== $("#s_pass2").val()) {
      handleError('Passwords do not match');
      return false;
    }
    
    sendAjax($("#signupForm").attr("action"), $("#signupForm").serialize());
    
    return false;
  });
  
  // handle login submission
  $("#loginSubmit").on("click", (e) => {
    e.preventDefault();
    
    $("#error").hide();
    
    if($("#l_user").val() == '' || $("#l_pass").val() == '') {
      handleError('Username or password is empty');
      return false;
    }
    
    sendAjax($("#loginForm").attr("action"), $("#loginForm").serialize());
    
    return false;
  });
  
  // handle play as guest submission
  $("#guestlink").on("click", (e) => {
    e.preventDefault();
    
    $("#error").hide();
    
    window.location = "/guest";
  });
  
});