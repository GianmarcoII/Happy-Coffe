$(function(){
  alert("This is a showcase website; Not all funtionalities are available!");
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
      y: -10
    });
    gsap.from(".banner_body",{
      scrollTrigger: ".banner_body",
      duration: 1,
      opacity: 1,
      y: 20
    });
  }catch(e){
    console.error(e);
  }
}
