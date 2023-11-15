// write your code here!
document.addEventListener("DOMContentLoaded", () => {

const url = "http://localhost:3000/ducks"
const duckNav = document.getElementById('duck-nav')
// const duckDisplay = document.getElementById('duck-display')
const duckDisplayName = document.getElementById('duck-display-name')
const duckDisplayImg = document.getElementById('duck-display-image')
const duckDisplayLikes = document.getElementById('duck-display-likes')
const newDuckForm = document.getElementById('new-duck-form')


// fetch and functions
fetch(url)
.then(r => r.json())
.then(ducks => {
    ducks.forEach(renderDuckImg)
    duckLikesButton(ducks)
})

function renderDuckImg (duck) {
    const duckImg = document.createElement('img')
    duckImg.src = duck.img_url
    duckNav.append(duckImg)

    duckImg.addEventListener('click', () => {
        duckDisplayName.innerText = duck.name;
        duckDisplayImg.src = duck.img_url;
        duckDisplayLikes.innerText = duck.likes
    })
}

function duckLikesButton() {
    duckDisplayLikes.addEventListener('click', () => {
        // console.log(parseInt(duckDisplayLikes.innerText) + 1)
        duckDisplayLikes.innerText = parseInt(duckDisplayLikes.innerText) + 1
        
    })
}

// New Duck Form
newDuckForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newDuck = {
        name: e.target['duck-name-input'].value,
        img_url: e.target['duck-image-input'].value,
        likes: 0,
    }
    newDuckForm.reset()
    renderDuckImg(newDuck)
})
})