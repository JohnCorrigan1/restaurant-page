import menuItem from "../functions/menuItem";

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
    description = "Cheese pizza topped with peppers, muchrooms, olives, tomatoes, and spices"
    gridContainer.appendChild(menuItem(item, description))

    item = "Hawaiian"
    description = "Cheese pizza topped with pineapple and ham. Don't knock it til you try it"
    gridContainer.appendChild(menuItem(item, description))
    
    item = "Supreme"
    description = "Cheese pizza topped with pepperoni, peppers, onions, and tomatoes"
    gridContainer.appendChild(menuItem(item, description))
    
    item = "Variety"
    description = "8 different style pizzas in one"
    gridContainer.appendChild(menuItem(item, description))
    
    item = "Build your own"
    description = "Any way you want. If we have the ingredients we will make it"
    gridContainer.appendChild(menuItem(item, description))
}
