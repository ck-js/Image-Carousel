// import image1 from './img1.jpeg'
// import image2 from './image2.jpeg'
// import image3 from './image3.jpeg'


// retreive each slide wrapper element
const slideElements = document.querySelectorAll('.slide-wrappers')
const slideElementsArray = Array.from(slideElements);
const firstSlide = slideElementsArray[0];
const secondSlide = slideElementsArray[1];
const thirdSlide = slideElementsArray[2];


const slideCircleElements = document.querySelectorAll('.slide-nav-circles')
const slideCirclesArray = Array.from(slideCircleElements);

// firstSlide.classList.remove('current-slide')
// secondSlide.classList.add('current-slide')

function previousSlide() {
    const currentSlide = document.querySelector('.current-slide')
    const currentSlideCircle = document.querySelector('.current-slide-circle')
// alert(currentSlide.id)
if (currentSlide.id === 'slide-1') {
    currentSlide.classList.remove('current-slide')
    thirdSlide.classList.add('current-slide')

    currentSlideCircle.classList.remove('current-slide-circle')
slideCirclesArray[2].classList.add('current-slide-circle')
}
if (currentSlide.id === 'slide-3') {
    currentSlide.classList.remove('current-slide')
    secondSlide.classList.add('current-slide')

    currentSlideCircle.classList.remove('current-slide-circle')
slideCirclesArray[1].classList.add('current-slide-circle')
}



if (currentSlide.id === 'slide-2') {
    currentSlide.classList.remove('current-slide')
    firstSlide.classList.add('current-slide')

    currentSlideCircle.classList.remove('current-slide-circle')
slideCirclesArray[0].classList.add('current-slide-circle')
}

}
function nextSlide() {
    const currentSlide = document.querySelector('.current-slide')
    const currentSlideCircle = document.querySelector('.current-slide-circle')

// alert(currentSlide.id)
if (currentSlide.id === 'slide-1') {
    currentSlide.classList.remove('current-slide')
    secondSlide.classList.add('current-slide')

    currentSlideCircle.classList.remove('current-slide-circle')
slideCirclesArray[1].classList.add('current-slide-circle')
}
if (currentSlide.id === 'slide-2') {
    currentSlide.classList.remove('current-slide')
    thirdSlide.classList.add('current-slide')

    currentSlideCircle.classList.remove('current-slide-circle')
slideCirclesArray[2].classList.add('current-slide-circle')
}
if (currentSlide.id === 'slide-3') {
    currentSlide.classList.remove('current-slide')
    firstSlide.classList.add('current-slide')

    currentSlideCircle.classList.remove('current-slide-circle')
slideCirclesArray[0].classList.add('current-slide-circle')
}

}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextSlide();
    }
    if (event.key === 'ArrowLeft') {
        previousSlide();
    }
});

slideCirclesArray.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        const currentSlide = document.querySelector('.current-slide');
        const currentSlideCircle = document.querySelector('.current-slide-circle');
        currentSlide.classList.remove('current-slide');
        currentSlideCircle.classList.remove('current-slide-circle');
        slideElementsArray[index].classList.add('current-slide');
        circle.classList.add('current-slide-circle');
    });
});