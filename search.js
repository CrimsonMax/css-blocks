const userList = document.querySelector('#result')
const filter = document.querySelector('#filter')

const itemsArray = []

filter.addEventListener('input', e => filterUser(e.target.value))

getData()

function filterUser(input) {
  itemsArray.forEach(elem => {
    let condition = elem.querySelector('h4').innerText.toLowerCase().includes(input.toLowerCase())

    if (!condition) {
      elem.classList.add('hide')
    } else {
      elem.classList.remove('hide')
    }
  })
}

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50')

  const { results } = await res.json()

  userList.innerHTML = ''

  results.forEach(elem => {
    const li = document.createElement('li')

    itemsArray.push(li)

    li.innerHTML = `
    <img src="${elem.picture.large}" alt="${elem.name.firs}">
    <div class="user-info">
      <h4>${elem.name.first} ${elem.name.last}</h4>
      <p>${elem.location.city}, ${elem.location.city}</p>
    </div>
    `

    userList.appendChild(li)
  })
}