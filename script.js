const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}
document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('.gallery');
    var flkty = new Flickity(elem, {
        wrapAround: true,
        pageDots: false,
        autoPlay: true
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> 1ac534901a5e1b10fa99186a3bd268c004f95968
