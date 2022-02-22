const menuBtn = document.querySelector('.menu-btn');
const navlinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})











var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
function openFullImg(pic) {
 fullImgBox.style.display = "flex";
 fullImg.src = pic;
}

function closeFullImg() {
 fullImgBox.style.display = "none";

}