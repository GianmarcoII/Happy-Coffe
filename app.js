$(function(){
  alert("This is a showcase website: not all functionalities are available");
  let menu = document.querySelector('.menu');
  let hamburgerMenu = document.querySelector('.mobile');
  powerMobileMenu(menu,hamburgerMenu);
  animation();
})

const powerMobileMenu = function(menu,mobileMenu){
  try{
    $(mobileMenu).click(function(e){
      $(menu).toggleClass('open');
      e.preventDefault();
    })
  }catch(e){
    console.error(e);
  }
}

const animation = function(){
  try{
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".copy",{
      scrollTrigger: ".copy",
      duration: 1,
      opacity:1,
      x:-20
    })
    gsap.from("img",{
      scrollTrigger: "img",
      duration: 1,
      opacity: 1,
      x: -10
    });
    gsap.from(".banner_body",{
      scrollTrigger: ".banner_body",
      duration: 1,
      opacity: 1,
      x: 20
    });
  }catch(e){
    console.error(e);
  }
}
