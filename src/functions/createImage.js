import Cheese from './../imgs/cheese.jpeg'
import Pepperoni from './../imgs/pepperoni.jpeg'
import MeatLovers from './../imgs/meatLovers.jpg'
import Veggie from './../imgs/veggie.jpeg'
import Hawaiian from './../imgs/hawaiian.jpeg'
import Supreme from './../imgs/supreme.jpeg'
import Variety from './../imgs/variety.jpeg'

export default function createImage(item){
    const itemImage = new Image();

    if(item === 'Plain Cheese' || item === 'Build your own'){
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
    else{
        itemImage.src = Variety
    }

    // else if(item ===)
    itemImage.classList.add('menu-img')
    return itemImage
}