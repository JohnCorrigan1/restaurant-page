export default function loadMenu(){

    const content = document.querySelector('.content')
    const main = document.createElement('div')
    main.setAttribute('id', 'main')
    content.appendChild(main);
    const menuTitle = document.createElement('div')
    menuTitle.classList.add('menu-title')
    menuTitle.textContent = "Our Menu"
    main.appendChild(menuTitle)
    }