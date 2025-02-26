
/* 

      contact-us menu handler with vanilla javascript

*/

// on page load
window.addEventListener('load', function () {  
  document.getElementById('contact-form-button')
  .setAttribute("style","border-bottom: 1px solid #fff; color: #fff;");  
});

//forms
let contactForm = document.getElementById('contact-form');
let subscribeForm = document.getElementById('subscribe-form');
let chatForm = document.getElementById('chat-form');

//buttons
let contactFormButton = document.getElementById('contact-form-button');
let subscribeFormButton = document.getElementById('subscribe-form-button');
let chatFormButton = document.getElementById('chat-form-button');

//columns
let columnRight = document.getElementById('contact-us');


document.addEventListener('click', function (event) {
      if (event.target.matches('#contact-form-button')) {
            contactForm.setAttribute("style", "display: block;");
            contactFormButton.setAttribute("style","border-bottom: 0 solid #fff;"); 
            contactFormButton.setAttribute("style","border-bottom: 1px solid #fff; color: #fff;");
            
            subscribeForm.setAttribute("style","display: none;");
            subscribeFormButton.setAttribute("style","border-bottom: 1px solid #000; color: #000;");            
      
            chatForm.setAttribute("style","display: none;");
            chatFormButton.setAttribute("style","border-bottom: 1px solid #000; color: #000;");            
      }            
      event.preventDefault();      
}, false);

// SUBSCRIBE
document.addEventListener('click', function (event) {
      if (event.target.matches('#subscribe-form-button')) {            
            subscribeForm.setAttribute("style", "display: block;");       
            subscribeFormButton.setAttribute("style","border-bottom: 0 solid #fff;");              
            subscribeFormButton.setAttribute("style","border-bottom: 1px solid #fff; color: #fff;");            

            contactForm.setAttribute("style","display: none;");
            contactFormButton.setAttribute("style","border-bottom: 1px solid #000; color: #000;");            
      
            chatForm.setAttribute("style","display: none;");
            chatFormButton.setAttribute("style","border-bottom: 1px solid #000; color: #000;");            
      }      
      event.preventDefault();
}, false);

// CHAT
document.addEventListener('click', function (event) {
      if (event.target.matches('#chat-form-button')) {
            chatForm.setAttribute("style", "display: block;");            
            chatFormButton.setAttribute("style","border-bottom: 0 solid #fff;");
            chatFormButton.setAttribute("style","border-bottom: 1px solid #fff; color: #fff;");            

            contactForm.setAttribute("style","display: none;");
            contactFormButton.setAttribute("style","border-bottom: 1px solid black !important; color: #000;");            
      
            subscribeForm.setAttribute("style","display: none;");
            subscribeFormButton.setAttribute("style","border-bottom: 1px solid black; color: #000;");            
      }      
      event.preventDefault();
}, false);

