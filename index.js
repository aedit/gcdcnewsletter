const vinb = document.querySelector('#viewinbrowser')
const date = document.querySelector('#date')
const blogimage = Array.from(document.querySelectorAll('.blog-image'))
const blogtitle = Array.from(document.querySelectorAll('.blog-title'))
const blogdescription = Array.from(
  document.querySelectorAll('.blog-description')
)
const bloglink = Array.from(document.querySelectorAll('.blog-link'))
const newstitle = Array.from(document.querySelectorAll('.news-title'))
const newslist = Array.from(document.querySelectorAll('.news-list li'))
const overlay = document.querySelector('#overlay')
const inputtext = document.querySelector('#inputtext')

const elements = [
  vinb,
  date,
  ...blogimage,
  ...blogdescription,
  ...bloglink,
  ...blogtitle,
  ...newslist,
  ...newstitle
]

elements.forEach(e => {
  e.addEventListener('click', evt => {
    overlay.classList.add('visibile')
    console.log('f')
  })
})
