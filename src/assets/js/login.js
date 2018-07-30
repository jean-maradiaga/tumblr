var Auth = (function () {

    var _validate= function () {
      // private stuff

      var email = document.getElementById("email").value;
      var pass = document.getElementById("password").value;
      var valid_email;
      var valid_pass;
      var result;

      if(email === "jean@mail"){
        valid_email = true;
        document.getElementById("invalid-email").style.display = "none";
      }else{
        valid_email = false;
        document.getElementById("invalid-email").style.display = "block";
      }

      if(pass === "qwerty"){
        valid_pass = true;
        document.getElementById("invalid-password").style.display = "none";
      }else{
        valid_pass = false;
        document.getElementById("invalid-password").style.display = "block";
      }

      if(valid_pass && valid_email){
        result = true;
      }else{
        result = false;
      }

      return result;

    };
  
    var login = function () {
        return _validate();
    };
    
    return {
      login: login
    };
  
  })();


//Get the form that submits the form
var form = document.getElementById('login_form').addEventListener("submit", function(event){
    if(!Auth.login()){
        event.preventDefault();
    }
});
