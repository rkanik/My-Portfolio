
 var count = 1;

window.setInterval(function(){
    nextImage();
  }, 3000);

function nextImage() {
    var images = document.querySelector(".pro3slider");
    count++;

    if (count > 10) {
        count = 1;
        images.style.backgroundImage = "url(images/projects/SchoolManagement/" + count + ".PNG)";
    } else {
        images.style.backgroundImage = "url(images/projects/SchoolManagement/" + count + ".PNG)";
    }
}

function prevImage() {
    var images = document.querySelector(".pro3slider");
    count--;
    if (count <= 0) {
        count = 10;
        images.style.backgroundImage = "url(images/projects/SchoolManagement/" + count + ".PNG)";
    } else {
        images.style.backgroundImage = "url(images/projects/SchoolManagement/" + count + ".PNG)";
    }
}
