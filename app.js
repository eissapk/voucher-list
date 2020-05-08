// select btns
const prevBtn = document.querySelector('.fa-chevron-left');
const nextBtn = document.querySelector('.fa-chevron-right');


// previous btn
function prev() {
    const slider = document.querySelector('.slides');
    slider.scrollBy({
        top: 0,
        left: -120,
        behavior: 'smooth'
    });
}

// next btn
function next() {
    const slider = document.querySelector('.slides');
    slider.scrollBy({
        top: 0,
        left: 120,
        behavior: 'smooth'
    });
}


// event
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);