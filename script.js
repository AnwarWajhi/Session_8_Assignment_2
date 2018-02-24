    //on click of Logout button in welcome page, go to Main page
    $("#btnLogOut").on("click",function(){
        $("#main-front-page").css("visibility", "visible");
        $("#main-front-page").show();
    
        $("#welcome-page").css("visibility", "hidden");
        $("#welcome-page").hide();
    
    });
    
    //on click of submit button in Login page
    $("#btnSubmitLogin").on("click",function(event){
     event.preventDefault(); //to prevent it from going back to Main front page
      var signedUp_email = localStorage.getItem("email");
      //alert("Email entered at sign up time ="+signedUp_email);
      var signedUp_password = localStorage.getItem("password");
      //alert("password entered at sign up time="+signedUp_password);
    //alert("Login email entered by user ="+document.getElementById("login-email").value.trim());
    //alert("Login password entered by user ="+document.getElementById("login-password").value.trim());
      if (  (document.getElementById("login-email").value.trim()==signedUp_email.trim())  && 
            (document.getElementById("login-password").value.trim()==signedUp_password.trim())  ){
          //if both email and password entered at login time matches the ones entered at Sign Up time then login is successful
           alert("login successful");
        //logged_in= true;
        $("#welcome-page").css("visibility", "visible"); 
        $("#welcome-page #welcomeName").text(localStorage.getItem("signedUpName")); //retrieve the Name and display in welcome page
        $("#welcome-page").show();    
    
    //hide all other pages
        $("#main-front-page").css("visibility", "hidden");   
        $("#main-front-page").hide();
    
        $("#login-page").css("visibility", "hidden");  
        $("#login-page").hide();
    
        $("#signup-page").css("visibility", "hidden");  
        $("#signup-page").hide();
           
      }//end if successful login
      else{
          //login failed as username or password is incorrect
        alert("Login failed");
        $("#login-page #loginErrMsg").text("loginId or password incorrect"); //show the error message in login page
        $("#login-page").show();
        $("#main-front-page").hide();
        $("#signup-page").hide();
        $("#welcome-page").hide();
        }
    
    });
    
    
    //on click of Login button - show the Login div and hide all others
    $("#btnLogin").on("click", function() {
     $("#main-front-page").css("visibility","hidden");
     $("#main-front-page").hide();
     $("#login-page").css("visibility","visible");
     $("#login-page").show();
    });
    
    
    //on click of Back button from Login page, go to Main page
    $("#btnBackLogin").on("click",function() {
     $("#main-front-page").css("visibility","visible");	
     $("#main-front-page").show();
    
     $("#login-page").css("visibility","hidden");
     $("#login-page").hide();
    
     $("#signup-page").css("visibility","hidden");
     $("#signup-page").hide();
    });
    
    
    //on click of Back button from Sign Up page, go to Main page
    $("#btnBackSignUp").on("click",function() {
    
    $("#main-front-page").css("visibility","visible");	
     $("#main-front-page").show();
    
     $("#login-page").css("visibility","hidden");
     $("#login-page").hide();
    
     $("#login-page").css("visibility","hidden");
     $("#signup-page").hide();
    });
    
    
    //on click of Sign up button from Main page, go to Sign Up page. Hide all other pages / divs
    $("#btnSignUp").on("click", function() {
    
     $("#main-front-page").css("visibility","hidden");	
     $("#main-front-page").hide();
     $("#signup-page").css("visibility","visible");
     $("#signup-page").show();
    });
    
    //on click of submit button in sign up page, set the localStorage to all the values entered by user in the form and go to Main front page
    $("#btnSubmitSignUp").on("click",function(){
    
      localStorage.setItem("signedUpName",$("#sign-up-name").val());	
      localStorage.setItem("email",$("#sign-up-email").val());
      localStorage.setItem("password",$("#sign-up-password").val());	
      
      $("#main-front-page").css("visibility","visible");
      $("#main-front-page").show();
    
      $("#login-page").css("visibility","hidden");
      $("#login-page").hide();
    });
    