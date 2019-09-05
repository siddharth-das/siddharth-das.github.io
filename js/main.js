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