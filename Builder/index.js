const vinb = document.querySelector('#viewinbrowser')
const date = document.querySelector('#date')
const blogimage = Array.from(document.querySelectorAll('.blog-image'))
const blogtitle = Array.from(document.querySelectorAll('.blog-title'))
const blogdescription = Array.from(
  document.querySelectorAll('.blog-description'),
)
const bloglink = Array.from(document.querySelectorAll('.blog-link'))
const newstitle = Array.from(document.querySelectorAll('.news-title'))
const newslist = Array.from(document.querySelectorAll('.news-list li'))
const overlay = document.querySelector('#replace')

const elements = [
  vinb,
  date,
  ...blogimage,
  ...blogdescription,
  ...bloglink,
  ...blogtitle,
  ...newslist,
  ...newstitle,
]

elements.forEach(e => {
  e.addEventListener('click', evt => {
    const ele = evt.target
    overlay.value = ''
    switch (ele.localName) {
      case 'a':
        overlay.value = ele.href
        break
      case 'img':
        overlay.value = ele.src
        break
      default:
        overlay.value = ele.innerHTML.trim()
    }
    overlay.classList.add('display')
    const textAreaEvtListener = e => {
      if (e.code === 'Backquote') {
        switch (ele.localName) {
          case 'a':
            ele.href = overlay.value
            break
          case 'img':
            ele.src = overlay.value
            break
          default:
            ele.innerHTML = overlay.value
        }
        overlay.removeEventListener('keypress', textAreaEvtListener)
        overlay.classList.remove('display')
      }
    }
    overlay.addEventListener('keypress', textAreaEvtListener)
  })
})
