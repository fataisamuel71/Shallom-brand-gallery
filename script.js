const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const closeButton = document.querySelector(".close");
let currentIndex = 0;  
const filterButtons = document.querySelectorAll("button[data-category]");
const galleryItems = document.querySelectorAll(".gallery-item");

images.forEach((image, index) => {
    image.addEventListener("click", () => {
        currentIndex = index;
        lightboxImage.src = image.src;
         lightbox.classList.add("show");
    });
});
closeButton.addEventListener("click", () => {
     lightbox.classList.remove("show");
});
nextButton.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImage.src = images[currentIndex].src;
});
prevButton.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImage.src = images[currentIndex].src;
});

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        galleryItems.forEach((item) => {
            if (category === "all" || item.dataset.category === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});