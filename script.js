// import image1 from './img1.jpeg'
// import image2 from './image2.jpeg'
// import image3 from './image3.jpeg'


// retreive each slide wrapper element
const slideElements = document.querySelectorAll('.slide-wrappers')
// for (let i = 0; i < slideElements.length; i++) {

// }
// function to add class to next slide element
function addClassToNextSlide() {
    // iterate over each slide wrapper element
    slideElements.forEach((slideElement) => {
        // get the current active slide
        const activeSlide = slideElement.querySelector('.current-slide');
        // get the next slide
        const nextSlide = activeSlide.nextElementSibling;
        // if there is a next slide, add the 'active' class to it
        if (nextSlide) {
            nextSlide.classList.add('current-task');
        }
    });
}



