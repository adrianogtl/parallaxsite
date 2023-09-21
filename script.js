// Scroll to top button
const btnScrollToTop = document.querySelector('#btn-scroll-to-top')

btnScrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnScrollToTop.style.display = 'block'
  } else {
    btnScrollToTop.style.display = 'none'
  }
})