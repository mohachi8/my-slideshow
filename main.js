'use strict';

{
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let activeIndex = 0;

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('click', () => {
            activeIndex = Array.from(thumbnails).indexOf(thumbnail);
            mainImage.src = thumbnail.src;
            thumbnails.forEach((thumbnail) => {
                thumbnail.classList.remove('active');
            });
            thumbnail.classList.add('active');
        });
    });

    prevButton.addEventListener('click', () => {
        activeIndex--;
        if (activeIndex < 0) {
            activeIndex = thumbnails.length - 1;
        }
        mainImage.src = thumbnails[activeIndex].src;
        thumbnails.forEach((thumbnail) => {
            thumbnail.classList.remove('active');
        });
        thumbnails[activeIndex].classList.add('active');
    });

    nextButton.addEventListener('click', () => {
        activeIndex++;
        if (activeIndex >= thumbnails.length) {
            activeIndex = 0;
        }
        mainImage.src = thumbnails[activeIndex].src;
        thumbnails.forEach((thumbnail) => {
            thumbnail.classList.remove('active');
        });
        thumbnails[activeIndex].classList.add('active');
    });
}