var Links ={
  setColor : function (color){
  //   var alist = document.querySelectorAll('a');
  //   var i = 0;
  //   while(i < alist.length){
  //   console.log(alist[i]);
  //   alist[i].style.color=color;
  //   i=i+1;
  // }
  $('a').css('color',color);
}
}


var Body = {
 setcolor: function(color){
  // document.querySelector('body').style.color=color;
$('body').css('color',color);
},
setbackgroundcolor:function(color){
//  document.querySelector('body').style.backgroundColor=color;
$('body').css('backgroundColor',color);
}
}
  function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value==='night'){Body.setbackgroundcolor('black');
Body.setcolor('white');
self.value='day';

Links.setColor('powderblue')
 }

else {
Body.setbackgroundcolor('white');
Body.setcolor('black');
self.value='night';
Links.setColor('blue')

}
}
