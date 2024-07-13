$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

function createCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }
  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  function eraseCookie(name) {
    createCookie(name, "", -1);
  }
  
  function runCookiedCodes() {
    // Add tracking scripts here
    console.log("cookies ran");
    // End tracking scripts
  }
  
  if (readCookie("cookie-notice-accepted") == "true") {
    runCookiedCodes();
  document.querySelector(".reshow-button").classList.add("hide-button");
    //removes cookies while testing
    //eraseCookie('cookie-notice-accepted')
    
  } else {
    
    document.getElementById("cookie-notice").style.display = "block";
  }
  
  document
    .getElementById("cookie-notice-accept")
    .addEventListener("click", function () {
      createCookie("cookie-notice-accepted", "true", 31);
      document.getElementById("cookie-notice").style.display = "none";
      document.getElementById("cookie-notice").classList.add("hide-button");
      runCookiedCodes();
    });
  
  document
    .querySelector("#close-cookie-banner")
    .addEventListener("click", (e) => {
      eraseCookie("cookie-notice-accepted")
      document.getElementById("cookie-notice").style.display = "none";
    });
  
  document.querySelector(".reshow-button")
    .addEventListener("click", function() {
    document.getElementById("cookie-notice").style.display = "block";
  })
    


