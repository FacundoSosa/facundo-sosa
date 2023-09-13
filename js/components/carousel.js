/* ============= CAROUSEL =========== */

const carouselContainer = document.querySelector(".carousel__container");
const carouselIndicator = document.querySelectorAll(".carousel__indicator");
const carouselLeft = document.getElementById("carousel-left");
const carouselRight = document.getElementById("carousel-right");

let counter = 0;
let imageSize = -100 / 6;
let limit = 2;

const handleMovement = (position, imageSize) => {
    let translate = position * imageSize;
    carouselContainer.style.transform = `translateX(${translate}%)`    
}

const checkWindowSize = () => {
    if (window.innerWidth > 768 && window.innerWidth < 1024) {
        imageSize = -100 / 4;
        limit = 3;
    } else if (window.innerWidth < 768) {
        imageSize = -100 / 6;
        limit = 4;
    } else {
        imageSize = -100 / 6;
        limit = 2;
    }
}

carouselRight.addEventListener("click", () => {
    counter++;
    checkWindowSize()
    if (counter > limit) {
        counter = 0;
    }
    handleMovement(counter, imageSize)
});

carouselLeft.addEventListener("click", () => {
    counter--;
    checkWindowSize()
    if (counter < 0) {
        counter = limit;
    }
    handleMovement(counter, imageSize);
});

window.addEventListener("resize", () => {
    checkWindowSize()
    counter = 0;
    handleMovement(counter, imageSize)
})



// Dragging function

/* let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    console.log("start");
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carouselContainer.scrollLeft;
}

const dragging = (e) => {
    console.log("dragging");
    if (!isDragStart) return;
    e.preventDefault()
    let positionDiff = e.pageX - prevPageX;
    carouselContainer.scrollLeft = prevScrollLeft - positionDiff;
    console.log(positionDiff);
    if (positionDiff > -100 && positionDiff < 0) {
        carouselContainer.style.transform = `translateX(${positionDiff}%)`
    }
}

const dragStop = () => {
    console.log("stop");
    isDragStart = false;
}

carouselContainer.addEventListener("mousedown", dragStart);
carouselContainer.addEventListener("mousemove", dragging);
carouselContainer.addEventListener("mouseup", dragStop); */