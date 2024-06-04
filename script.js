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
});