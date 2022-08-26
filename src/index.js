import './style.css';
// import load from './modules/pageLoad'
import createNav from './modules/createNav';

createNav();

const home = document.getElementById('home')
const menu = document.getElementById('menu')
const contact = document.getElementById('contact')

home.addEventListener('click', function(){
    home.classList.add('current-page')
    menu.classList.remove('current-page')
    contact.classList.remove('current-page')
    //call load home page
})

menu.addEventListener('click', function(){
    menu.classList.add('current-page')
    home.classList.remove('current-page')
    contact.classList.remove('current-page')
    //call load menu page
})

contact.addEventListener('click', function(){
    contact.classList.add('current-page')
    home.classList.remove('current-page')
    menu.classList.remove('current-page')
    //call load contact page
})
