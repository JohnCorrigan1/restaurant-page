export default function createNav(){
    const content = document.querySelector('.content')
    
    const nav = document.createElement('div')
    nav.classList.add('nav')
    content.appendChild(nav)

    const pages = document.createElement('div')
    pages.classList.add('pages')
    nav.appendChild(pages)
    
    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = "MamaMia's PizzaRia"
    nav.appendChild(title)

    const home = document.createElement('button')
    home.classList.add('nav-button')
    home.setAttribute('id','home')
    home.textContent = "Home"
    nav.appendChild(home)

    const menu = document.createElement('button')
    menu.classList.add('nav-button')
    menu.setAttribute('id','menu')
    menu.textContent = "Menu"
    nav.appendChild(menu)

    const contact = document.createElement('button')
    contact.classList.add('nav-button')
    contact.setAttribute('id','contact')
    contact.textContent = "Contact"
    nav.appendChild(contact)

}