let typed = new Typed("#nmMahabur",{
  strings : ['Developer.','UI/UX Designer.'],
  typeSpeed :100,
  backSpeed :100,
  loop: true
})


$(document).ready(function(){
 
  $(document).scroll(function () {
    var sc = $(document).scrollTop();
    if(sc >= 300){
      $("#navbar").addClass("sticky");
      
    }else{
      $("#navbar").removeClass("sticky")
    }
    })

    $(document).scroll(function(){
     
    })


})















