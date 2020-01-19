/*
Creator: Brianna Schladweiler
Date created: January 9, 2020
Date last modified: January 19, 2020
*/

function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["contactUs"].elements.length; 
        loopCounter++) {
        if (document.forms["contactUs"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["contactUs"].elements[loopCounter]
               .parentElement.className = "col-3";
        }
    }    
} 

function validateItems() {
    clearErrors();
    var name = document.forms["contactUs"]["name"].value;
    var email = document.forms["contactUs"]["email"].value;
    var phone = document.forms["contactUs"]["phone"].value;
    if (name == "") {
        alert("Name must be filled in.");
        document.forms["contactUs"]["name"]
            .parentElement.className = "col-3 has-error"
        document.forms["contactUs"]["name"].focus();
        return false;
    }
   if (email == "") {
       alert("Email must be filled in.");
       document.forms["contactUs"]["email"]
          .parentElement.className = "col-3 has-error"
       document.forms["contactUs"]["email"].focus();
       return false;
   }
   if (phone == "" || isNaN(phone)) {
        alert("Phone must be filled in.");
        document.forms["contactUs"]["phone"]
            .parentElement.className = "col-3 has-error"
        document.forms["contactUs"]["phone"].focus();
        return false;
    }
    alert("All required information is valid.");
   // We are returning false so that the form doesn't submit 
   return false;
}