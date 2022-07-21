const header = document.querySelector('#placeholder-header')
const title = document.querySelector('#placeholder-title')
const excerpt = document.querySelector('#excerpt')
const profile_img = document.querySelector('#profile-img')
const author_name = document.querySelector('#author-name')
const date = document.querySelector('#date')

const animation = document.querySelectorAll('.animated-bg')
const animation_text = document.querySelectorAll('.animated-bg-text')

function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80" alt="Space">'
  title.innerHTML = 'Lorem ipsum dolor sit amet.'
  excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, quisquam.'
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Gal">'
  author_name.innerHTML = 'Clara Sass'
  date.innerHTML = 'Dec 22, 2000'

  animation.forEach(elem => elem.classList.remove('animated-bg'))
  animation_text.forEach(elem => elem.classList.remove('animated-bg-text'))
}

setTimeout(getData, 2500)