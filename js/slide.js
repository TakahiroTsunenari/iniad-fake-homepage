const pics_src = ["pic/1.jpg","pic/2.jpg","pic/3.jpg","pic/4.jpg"];
let num = -1;


function slideshow_timer(){
  if (num === 3){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}

setInterval(slideshow_timer, 3000);