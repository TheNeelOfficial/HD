// home page cursor

var cursor = document.getElementById('custom-cursor');
var cursorDot = document.getElementById('custom-cursor-dot');

document.addEventListener("mousemove",function(event){

  var x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
  var y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;

  cursor.style.left = x + 'px';
  cursor.style.top  = y + 'px';
  cursorDot.style.left = x + 'px';
  cursorDot.style.top  = y + 'px';

});

var links = document.getElementsByTagName('a');
for(var i = 0, len = links.length; i < len; i++) {
    links[i].onmouseenter = function(){mouseOver()};
    links[i].onmouseleave = function(){mouseOut()};
}

function mouseOver() {
  cursor.classList.add("hovering-link");
  cursorDot.classList.add("hovering-link");
}

function mouseOut() {
  cursor.classList.remove("hovering-link");
  cursorDot.classList.remove("hovering-link");
}



// other pages cursor

var other_cursor = document.getElementById('other_custom-cursor');
var other_cursorDot = document.getElementById('other_custom-cursor-dot');

document.addEventListener("mousemove",function(event){

  var x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
  var y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;

  other_cursor.style.left = x + 'px';
  other_cursor.style.top  = y + 'px';
  other_cursorDot.style.left = x + 'px';
  other_cursorDot.style.top  = y + 'px';

});

var links = document.getElementsByTagName('a');
for(var i = 0, len = links.length; i < len; i++) {
    links[i].onmouseenter = function(){mouseOver()};
    links[i].onmouseleave = function(){mouseOut()};
}

function mouseOver() {
  other_cursor.classList.add("hovering-link");
  other_cursorDot.classList.add("hovering-link");
}

function mouseOut() {
  other_cursor.classList.remove("hovering-link");
  other_cursorDot.classList.remove("hovering-link");
}
