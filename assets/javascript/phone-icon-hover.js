/*
    - handling adding an animation effect on hover of a font-awesome icon 
    -change this to change color ofall icons n a product-section/ maybe rename to card-icons-6 */

const squarePhoneIcon = document.getElementById("square-phone-icon");

document.addEventListener("hover", function (event) {
    console.log("hover test!");
      if (event.target.matches(".fa-phone-square")) {            
        squarePhoneIcon.classList.add("fa-beat");            
      }, function(){
        squarePhoneIcon.classList.remove("fa-beat");            
      }      

      event.preventDefault();
}, false);

