import Chef from "./../imgs/DALLE_chef.png"

export default function loadHome(){

const content = document.querySelector('.content')

const main = document.createElement('div')
main.setAttribute('id', 'main')
content.appendChild(main);

const aboutDiv = document.createElement('div')
aboutDiv.classList.add('about-div')
main.appendChild(aboutDiv)

const about = document.createElement('p')
about.classList.add('about')
about.textContent = "This image of the chef was created by DALL.E an AI that generates images from text prompts. That's why it looks so weird. The prompt for this image was 'professional chef happily making a large pizza in a fancy restaurant studio lighting'"
aboutDiv.appendChild(about)

// const chef = document.createElement('img')
const chef = new Image();
// chef.src = './imgs/pizza_chef.jpg'
chef.src = Chef;
chef.classList.add('chef')
aboutDiv.appendChild(chef)
}
