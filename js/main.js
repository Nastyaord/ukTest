function setScrollHeight(picture, scroll){
    let pictureHeight = picture.offsetHeight;
    scroll.style.height = pictureHeight + 'px';
};

function setScrollWidth(picture, scroll){
    let pictureWidth = picture.offsetWidth;
    scroll.style.width = pictureWidth + 'px';
}

setScrollHeight(first_picture, first_scroll);
setScrollHeight(second_picture, second_scroll);
setScrollHeight(third_picture, third_scroll);


window.addEventListener('resize', () => { setScrollHeight(first_picture, first_scroll) });
window.addEventListener('resize', () => { setScrollHeight(second_picture, second_scroll) });
window.addEventListener('resize', () => { setScrollHeight(third_picture, third_scroll) });

window.addEventListener('resize', () => { setScrollWidth(second_picture, second_scroll) });
window.addEventListener('resize', () => { setScrollWidth(third_picture, third_scroll) });

