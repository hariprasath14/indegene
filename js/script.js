// navbaranimmation starts
$(document).ready(function(){
    $(".menu").click(function(){
      $(".nav-content").stop().fadeToggle();
    });
});
// navbaranimmation ends


$(document).ready(function(){

var d1=$(".p1")
var d2=$(".p2")
var d3=$(".p3")
var d4=$(".p4")
var  d5=$(".p5")
var x=[d1,d2,d3,d4,d5]
var m =0
var n=0
// quoteanimmation starts
$(".move-l").stop().click(function(){

  if ($(window).width()>1720){
    if(m>=0){
    $(".dummycontent").animate({left: "+=540"});
    x[m].stop().addClass("white");
    x[m-1,m+1].stop().removeClass("white");
    $(".move-r").stop().addClass("white");
  m--;
  n--;
    }
  }
// media @ 1200 start
  else{

    if(m>=0){
      $(".dummycontent").animate({left: "+=370"});
      x[m].stop().addClass("white");
      x[m-1,m+1].stop().removeClass("white");
      $(".move-r").stop().addClass("white");
    m--;
    n--;
      }
  }

  // media@ 1200end
});

$(".move-r").stop().click(function(){
  if ($(window).width()>1720){
    if(!(m>=3)){
      $(".dummycontent").animate({left: "-=540"});
    
    x[m-1,m+1].stop().removeClass("white");
    x[m+2].stop().addClass("white"); 
    m++
      n++
    $(".move-l").stop().addClass("white");
    }
  }
// media @ 1200 start


  else{
    if(!(m>=3)){
      $(".dummycontent").animate({left: "-=370"});
    
    x[m-1,m+1].stop().removeClass("white");
    x[m+2].stop().addClass("white"); 
    m++
      n++
    $(".move-l").stop().addClass("white");
    }
  }

  // media@ 1200end

  });
// quoteanimmation ends

// quoteanimmation moveangle starts
  $(".move-l").stop().click(function(){
    if(n<=-1){
      $(".move-l").stop().removeClass("white");
      }

  });
  $(".move-r").stop().click(function(){
    if(n>=3){
      $(".move-r").stop().removeClass("white");
      }

  });

// quoteanimmation moveangle ends
});

