// when I scroll down the page, at a certain point
// add a class to make the header white

// select the header
const headerTag = document.querySelector("header")

const toggleHeader = function () {
    const pixels = window.pageYOffset

    if (pixels > 60) {
        headerTag.classList.add("scrolled")
    } else {
        headerTag.classList.remove("scrolled")
    }
}

const fadeBox = function () {
    const pixels = window.pageYOffset
    
    // decrease the 1000 to fade in quicker e.g. 200
    const alpha = Math.min(pixels / 1000, 0.25)

    headerTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpha})`
}

fadeBox()
toggleHeader()

document.addEventListener("scroll", function () {
    toggleHeader()
    fadeBox()
})



