import createImage from "../functions/createImage";

export default function menuItem(item, description){
    const gridItem = document.createElement('div')
    gridItem.classList.add('menu-item')

    const itemTitle = document.createElement('h2')
    itemTitle.textContent = item
    gridItem.appendChild(itemTitle)

        // const itemImage = document.createElement('img')
    
    gridItem.appendChild(createImage(item))

    const itemDescription = document.createElement('p')
    itemDescription.textContent = description
    gridItem.appendChild(itemDescription)

    return gridItem
}