export default function loadContact(){

    const content = document.querySelector('.content')
    const main = document.createElement('div')
    main.setAttribute('id', 'main')
    content.appendChild(main);
    
    const contactTitle = document.createElement('div')
    contactTitle.classList.add('contact-title')
    contactTitle.textContent = "Contact us here"
    main.appendChild(contactTitle)
    
    }