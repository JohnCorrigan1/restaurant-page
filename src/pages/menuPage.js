import Cheese from './../imgs/cheese.jpeg'
import Pepperoni from './../imgs/pepperoni.jpeg'
import MeatLovers from './../imgs/meatLovers.jpg'
import Veggie from './../imgs/veggie.jpeg'
import Hawaiian from './../imgs/hawaiian.jpeg'
import Supreme from './../imgs/supreme.jpeg'
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
    
    item = "Pepperoni"
    description = "The Cheese piza topped with premium pepperoni"
    gridContainer.appendChild(menuItem(item, description))

    item = "Meat Lovers"
    description = "Cheese pizza topped with a generous amount of sausage, pepperoni, ham, and bacon"
    gridContainer.appendChild(menuItem(item, description))

    item = "Veggie"
    description = "This is just sauce and 4 different cheeses, mozzarella, cheddar, and two others"
    gridContainer.appendChild(menuItem(item, description))

    item = "Hawaiian"
    description = "This is just sauce and 4 different cheeses, mozzarella, cheddar, and two others"
    gridContainer.appendChild(menuItem(item, description))
    
    item = "Supreme"
    description = "Cheese pizza topped with pepperoni, peppers, onions, and tomatoes"
    gridContainer.appendChild(menuItem(item, description))
    
    item = "Plain Cheese"
    description = "This is just sauce and 4 different cheeses, mozzarella, cheddar, and two others"
    gridContainer.appendChild(menuItem(item, description))
    
    item = "Plain Cheese"
    description = "This is just sauce and 4 different cheeses, mozzarella, cheddar, and two others"
    gridContainer.appendChild(menuItem(item, description))
}


function menuItem(item, description){
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


function createImage(item){
    const itemImage = new Image();

    if(item === 'Plain Cheese'){
        itemImage.src = Cheese
    }

    else if(item === 'Pepperoni'){
    itemImage.src = Pepperoni
    }

    else if(item === 'Meat Lovers'){
        itemImage.src = MeatLovers
    }

    else if(item === 'Veggie'){
        itemImage.src = Veggie
    }

    else if(item === 'Hawaiian'){
        itemImage.src = Hawaiian
    }

    else if(item === 'Supreme'){
        itemImage.src = Supreme
    }

    // else if(item ===)
    itemImage.classList.add('menu-img')
    return itemImage
}