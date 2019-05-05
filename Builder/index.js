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
const overlay = document.querySelector('.overlay')
const textarea = document.querySelector('#replace')
const insert = document.querySelector('#insert')
const code = document.querySelector('#code')
const htmlsection = document.querySelector('.html')
const htmlcode = document.querySelector('#html-code')
const htmlcopy = document.querySelector('#html-copy')
const htmlclose = document.querySelector('#html-close')

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

code.addEventListener('click', evt => {
  overlay.classList.remove('display')
  htmlsection.classList.add('display')

  htmlcode.value = document.documentElement.outerHTML
  htmlcopy.addEventListener('click', evt => {
    htmlcode.select()
    document.execCommand('copy')
  })
  htmlclose.addEventListener('click', evt => {
    htmlsection.classList.remove('display')
  })
})

elements.forEach(e => {
  e.addEventListener('click', evt => {
    evt.preventDefault()
    const ele = evt.target
    textarea.value = ''
    switch (ele.localName) {
      case 'a':
        textarea.value = ele.href
        break
      case 'img':
        textarea.value = ele.src
        break
      default:
        textarea.value = ele.innerHTML.trim()
    }
    overlay.classList.add('display')

    const textAreaEvtListener = e => {
      switch (ele.localName) {
        case 'a':
          ele.href = textarea.value
          break
        case 'img':
          ele.src = textarea.value
          break
        default:
          ele.innerHTML = textarea.value
      }
      insert.removeEventListener('click', textAreaEvtListener)
      overlay.classList.remove('display')
    }
    insert.addEventListener('click', textAreaEvtListener)
  })
})
