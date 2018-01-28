//Menu opening/ closing functionality
document.getElementById('mobile-menu-toggle').addEventListener("click", function() {
  var menu = document.getElementById('menu');
  var menuButton = document.getElementById('mobile-menu-toggle');

  if (menu.classList.contains('inactive')){
    menu.classList.remove('inactive');
    menu.classList.add('active');
    menuAnimate();
  }
  else {
    menu.classList.remove('active');
    menu.classList.add('inactive');
  }
});

//menu opening/ closing animation
var menuItems = document.getElementsByClassName('menu-link');

var tl = new TimelineMax();

function menuAnimate(){

tl
  .staggerFromTo(menuItems, 1, {
    autoAlpha: 0,
    y: 100
    },
    {
      autoAlpha: 1,
      y: 0,
      ease: Back.easeOut.config(0.25)
    },
      .25);
};

//moving hero area
var heroTimeline = new TimelineMax({paused:true}),

//Populate your timelines
heroTimeline

window.onload = function()
{
    heroTimeline.play();
}

//hover function on the spot

$('.case-studies-container:hover .case-study-copy ').hover(function() {
  console.log('Yo');
});
