const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant!';
    pageContent.appendChild(headline);

    const image = document.createElement('img');
    image.src = 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chanwalrus-941861.jpg&fm=jpg';
    image.height = 300;
    pageContent.appendChild(image);

    const copy = document.createElement('p');
    copy.textContent = 'We serve the best food in town. Come and taste it!';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
};

export default createRestaurantHomePage;