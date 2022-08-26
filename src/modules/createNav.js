export default function createNav(){
    const content = document.querySelector('.content');
    
    const nav = document.createElement('div')
    nav.classList.add('nav')
    nav.textContent = "Hello"
    content.appendChild(nav)
}