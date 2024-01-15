
const menuBtn = document.getElementById('menuBtn');
const navItem = document.getElementById('navItem');
const cancelBtn = document.getElementById('cancelBtn');

menuBtn.addEventListener('click', function(){
  navItem.style.right = "0vw";
  // navItem.style.display = "block";
})

cancelBtn.addEventListener('click', function(){
  navItem.style.right = "-60vw"
  // navItem.style.display = "none";

})

//  ? ========== Auto Typing JS ========== 

let typed = new Typed("#nmMahabur",{
  strings : ['Designer.','Developer.'],
  typeSpeed :100,
  backSpeed :100,
  loop: true
})


let typedd = new Typed("#aboutText",{
  strings : ['Freelancer','Designer','Developer','Problem Solver.'],
  typeSpeed :100,
  backSpeed :100,
  loop: true
})

//  ? ========== Sticky Navbar JS ========== 


/* 
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
 */





