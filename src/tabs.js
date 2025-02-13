import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

const createTabs = () => {
    const content = document.querySelector('#content');

    const div1 = document.createElement('button');
    const div2 = document.createElement('button');
    const div3 = document.createElement('button');

    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    });
    div2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    });
    div3.addEventListener('click', () => {
        clearContent();
        createContactPage();
    });
};

const clearContent = () => {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if(pageContent) {
        content.removeChild(pageContent);
    }
}

export default createTabs;