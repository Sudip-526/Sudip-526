$(document).ready(function(){


    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 30){
        $('.header').css({'background':'teal','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
      }else{
        $('.header').css({'background':'none','box-shadow':'none'});
      }
    });
  
  
    // $('.accordion-header').click(function(){
    //   $('.accordion .accordion-body').slideUp();
    //   $(this).next('.accordion-body').slideDown();
    //   $('.accordion .accordion-header span').text('+');
    //   $(this).children('span').text('-');
    // });
  
   });

function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "sudipjana525@gmail.com",
    Password : "sudip@123",
    To : 'sudipjana525@gmail.com',
    From : document.getElementById("email".value),
    Subject : "new messages",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}


var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

