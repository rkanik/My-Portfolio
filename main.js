var count = 1 ;
var circleActive = 0 ;
function nextImage(){
    var images = document.querySelector(".pro3slider");
    var dots = document.getElementsByClassName("dots");
    count++;circleActive++;

    if( count > 10 ){
        count = 1 ;circleActive = 0 ;
        images.style.backgroundImage = "url(images/projects/SchoolManagement/"+count+".PNG)";
        dots[circleActive+9].style.fill = "none";
        dots[circleActive+9].style.opacity = "0.5";
        dots[circleActive].style.fill = "cyan";
        dots[circleActive].style.opacity = "1";
    }else{
        images.style.backgroundImage = "url(images/projects/SchoolManagement/"+count+".PNG)";
        dots[circleActive-1].style.fill = "none";
        dots[circleActive-1].style.opacity = "0.5";
        dots[circleActive].style.fill = "cyan";
        dots[circleActive].style.opacity = "1";
    }
}
function prevImage(){
    var images = document.querySelector(".pro3slider");
    count--;
    if( count <= 0 ){
        count = 10 ;
        images.style.backgroundImage = "url(images/projects/SchoolManagement/"+count+".PNG)";
    }else{
        images.style.backgroundImage = "url(images/projects/SchoolManagement/"+count+".PNG)";
    }
}
var dotname = "dot1";
function dotclick( dotname ){
    var dots = document.getElementsByClassName("dots");
    for( var i = 0 ; i < dots.length ; i++ ){
        dots[i].style.fill = "none";
        dots[i].style.opacity = "0.5";
    }

    dotname.style.fill ="cyan";
    dotname.style.opacity = "1";
}
