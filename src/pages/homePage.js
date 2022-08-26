export default function loadHome(){

const content = document.querySelector('.content')
const main = document.createElement('div')
main.setAttribute('id', 'main')
content.appendChild(main);
const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = "MamaMia's PizzaRia"
    main.appendChild(title)

}
