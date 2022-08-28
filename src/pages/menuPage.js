import { first } from "lodash";

export default function loadMenu(){

    const content = document.querySelector('.content')

    const main = document.createElement('div')
    main.setAttribute('id', 'main')
    content.appendChild(main);
    
    const menuTitle = document.createElement('div')
    menuTitle.classList.add('menu-title')
    menuTitle.textContent = "Our Menu"
    main.appendChild(menuTitle)

    const gridContainer = document.createElement('div')
    gridContainer.classList.add('grid-container')
    main.appendChild(gridContainer)

    for(let i = 0; i < 10; i++){
    gridContainer.appendChild(menuItem())
    }
    // for(i = 0; i < 10; i++){
    //     const gridItem = document.createElement('div')
    //     gridItem.classList.add('grid-item')
    //     gridItem.textContent = "This is a test pls work"
    //     gridContainer.appendChild('grid-item')
    // }
    // gridContainer.appendChild(menuItem())
    }


    function menuItem(){
        const gridItem = document.createElement('div')
        gridItem.classList.add('menu-item')
        gridItem.textContent = "This is a test"
        return gridItem
    }