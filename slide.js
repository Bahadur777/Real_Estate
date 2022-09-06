let slideIndex = 1;
showSlide(slideIndex);
function plusSlide(n){
    showSlide(slideIndex += n)
}
function currentSlide (n){
    showSlide(slideIndex = n)
}

function showSlide(n){
    let i ;
  const slide = document.getElementsByClassName("single-property-slide-image")
  if(n > slide.length){ slideIndex = 1}
  if (n< 1){slideIndex = slide.length}
  for( i = 0; i < slide.length; i++){
      slide[i].style.display= "none"
  }
 slide[slideIndex -1].style.display = "block";
 setTimeout(showSlide, 1000); 
}
