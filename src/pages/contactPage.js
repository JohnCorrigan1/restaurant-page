import Giza from './../imgs/giza.png'

export default function loadContact(){

    const content = document.querySelector('.content')
    const main = document.createElement('div')
    main.setAttribute('id', 'main')
    content.appendChild(main);
    
    const contactDiv = document.createElement('div')
    contactDiv.classList.add('contact-div')
    main.appendChild(contactDiv)

    const phoneNum = document.createElement('p')
    phoneNum.textContent = "Schedule a reservation or place an order for pickup at: 100-200-3000"
    contactDiv.appendChild(phoneNum)

    const address = document.createElement('p')
    address.textContent = "Nazlet El-Semman, Al Haram, Giza Governorate 3512201, Egypt"
    contactDiv.appendChild(address)

    const giza = new Image();
    giza.src = Giza;
    giza.classList.add('giza')
    contactDiv.appendChild(giza)
}