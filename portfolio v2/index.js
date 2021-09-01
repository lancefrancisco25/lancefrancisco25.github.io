
//mousesmooth
/*
var mouseX=window.innerWidth/2,
    mouseY=window.innerHeight/2;
var el = $('#circleSlow');

var circle = { 
     el:$('#circleSlow'),
     x:window.innerWidth/2, 
     y:window.innerHeight/2, 
     w: el.outerWidth(), 
     h: el.outerHeight(), 
     update:function(){
            l = this.x-this.w/2; 
            t = this.y-this.h/2; 
            this.el.css({'transform':'translate3d('+l+'px,'+t+'px, 0)' }); 
            }
}

$(window).mousemove (function(e){
  mouseX = e.clientX;
  mouseY = e.clientY;
})

setInterval (function(){
  circle.x = lerp (circle.x, mouseX, 0.18);
  circle.y = lerp (circle.y, mouseY, 0.18);
  circle.update() 
},1000/60)


function lerp (start, end, amt){
  return (1-amt)*start+amt*end
}
*/

$('#nameHighlight').mouseenter( nameenter ).mouseleave( namexit );

var gonetimeout;
$('a').mouseenter(function(){
  $('.textPopup').text('Link').css('transform', 'scale(4.5) translateX(-10px)')
  gonetimeout = setTimeout(function(){
    $('.textPopup').css('transform', 'scale(0)')
  },800)
}).mouseleave(function(){
  clearTimeout(gonetimeout)
  $('.textPopup').css('transform', 'scale(0)')
});

$('.stolancehover').mouseenter(function(){
  $('.textPopup').text('STOLANCE - Lee').css({'transform': 'scale(4.5) translateX(-10px)', 'width': '20px'})
  gonetimeout = setTimeout(function(){
    $('.textPopup').css('transform', 'scale(0)')
  },800)
}).mouseleave(function(){
  clearTimeout(gonetimeout)
  $('.textPopup').css({'transform': 'scale(0)','width': ''})
});


$('.card').mouseenter(function(){
  $('.textPopup').text('Hover').css('transform', 'scale(4.5) translateX(-10px)')
  gonetimeout = setTimeout(function(){
    $('.textPopup').css('transform', 'scale(0)')
  },800)
  
}).mouseleave(function(){
  clearTimeout(gonetimeout)
  $('.textPopup').css('transform', 'scale(0)')
});

function nameenter(){
  $('.profile').css({'transform': 'scale(22)'})
}

function namexit(){
  $('.profile').css({'transform': 'scale(0) rotate(-180deg)'})
}

