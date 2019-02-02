const animatedTags = document.querySelectorAll("h2, h3, p, section img, a.button")

// fade out on load
animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function () {
  // check the constant is there
  // console.log("fade in")
  // look through all the animated tags and see
  // with the getBoundingClientRect if it's in the window

  let delay = 0.25

  animatedTags.forEach(tag => {
    // the () runs it
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom

    // console.log(tagTop, tagBottom)

    if (tagTop < window.innerHeight) {
      // keep the s because we want it to be a second
      tag.style.animation = `fadeIn 1s ${delay}s both`
      delay = delay + 0.25
    }
  })
}

// on load, run fadeIn
fadeIn()

// on scroll, run fadeIn
document.addEventListener("scroll", function () {
  fadeIn()
})

// on browser resize, run fadeIn
// because it's the browser, use window not document
window.addEventListener("resize", function () {
  fadeIn()
})

