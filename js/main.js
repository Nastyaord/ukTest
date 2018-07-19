function setScrollHeight(picture, scroll){
    let pictureHeight = picture.offsetHeight;
    scroll.style.height = pictureHeight + 'px';
};

function setScrollThirdHeight(picture, footer_scroll){
    let pictureHeight = picture.offsetHeight;
    let footerScrollHeight = footer_scroll.offsetHeight;
    third_scroll.style.height = pictureHeight - footerScrollHeight + 'px';
};

setScrollHeight(first_picture, first_scroll);
setScrollHeight(second_picture, second_scroll);
setScrollThirdHeight(third_picture, footer_scroll);


window.addEventListener('resize', () => { setScrollHeight(first_picture, first_scroll) });
window.addEventListener('resize', () => { setScrollHeight(second_picture, second_scroll) });
window.addEventListener('resize', () => { setScrollThirdHeight(third_picture, footer_scroll) });

