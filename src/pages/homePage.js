import Chef from "./../imgs/DALLE_chef.png"

export default function loadHome(){

const content = document.querySelector('.content')

const main = document.createElement('div')
main.setAttribute('id', 'main')
content.appendChild(main);

const title = document.createElement('div')
title.classList.add('title')
title.textContent = "MamaMia's PizzaRia"
main.appendChild(title)

const aboutDiv = document.createElement('div')
aboutDiv.classList.add('about-div')
main.appendChild(aboutDiv)

const about = document.createElement('p')
about.classList.add('about')
about.textContent = "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum"
aboutDiv.appendChild(about)

// const chef = document.createElement('img')
const chef = new Image();
// chef.src = './imgs/pizza_chef.jpg'
chef.src = Chef;
chef.classList.add('chef')
aboutDiv.appendChild(chef)
}
