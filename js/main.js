const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false
});

function toggle_heart(elem) {
    elem.classList.toggle("fa-heart");
    elem.classList.toggle("fa-heart-o")
    if (elem.classList.contains('fa-heart-o')) {
        elem.title = "Like"; 
    }
    else {
        elem.title = "Unlike";
    }    
}
window.onscroll = function() {changeProgress()};

function changeProgress() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.querySelector(".determinate").style.width = scrolled + "%";
}