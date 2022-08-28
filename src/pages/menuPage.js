import { first } from "lodash";

export default function loadMenu(){

    const content = document.querySelector('.content')

    const main = document.createElement('div')
    main.setAttribute('id', 'main')
    content.appendChild(main);
    
    const gridContainer = document.createElement('div')
    gridContainer.classList.add('grid-container')
    main.appendChild(gridContainer)

    let item = "Plain Cheese"
    let description = "This is just sauce and 4 different cheeses, mozzarella, cheddar, and two others"
    gridContainer.appendChild(menuItem(item, description))       
}


    function menuItem(item, description){
        const gridItem = document.createElement('div')
        gridItem.classList.add('menu-item')

        const itemTitle = document.createElement('h2')
        itemTitle.textContent = item
        gridItem.appendChild(itemTitle)

        const itemDescription = document.createElement('p')
        itemDescription.textContent = description
        gridItem.appendChild(itemDescription)

        return gridItem
    }