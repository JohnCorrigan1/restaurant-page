import _ from 'lodash';
import './style.css';
import createNav from './functions/createNav';
import loadHome from './pages/homePage';
import loadMenu from './pages/menuPage';
import loadContact from './pages/contactPage'
import removePage from './functions/removePage'
import createFooter from './functions/createFooter'

createNav();
loadHome();
createFooter();


const home = document.getElementById('home')
const menu = document.getElementById('menu')
const contact = document.getElementById('contact')

home.addEventListener('click', function(){
    removePage();
    home.classList.add('current-page')
    menu.classList.remove('current-page')
    contact.classList.remove('current-page')
    loadHome();
})

menu.addEventListener('click', function(){
    removePage();
    menu.classList.add('current-page')
    home.classList.remove('current-page')
    contact.classList.remove('current-page')
    loadMenu();
})

contact.addEventListener('click', function(){
    removePage();
    contact.classList.add('current-page')
    home.classList.remove('current-page')
    menu.classList.remove('current-page')
    loadContact();
})
