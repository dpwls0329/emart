$(document).ready(function(){
  var imgs;
  var img_count;
  var img_position = 1;

  imgs = $(".slide ul");
  img_count = imgs.children().length;//이미지 갯수
  console.log('img count = '+img_count);

  $('#back').click(function () {
    back();
  });
  $('#next').click(function () {
    next();
  });

  function back() {
    if(1<img_position){
      imgs.animate({
        left:'+=1180px'
      });
      img_position--;
    }
  }
  function next() {
    if(img_count>img_position){
      imgs.animate({
        left:'-=1180px'
      });
      img_position++;
    } else {
      img_position = 1;
      imgs.animate({
        left:'+=3540px'
      });
    }
  }
});