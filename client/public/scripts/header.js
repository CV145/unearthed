//Contain all JS code to add elements to the <header> element

//Variable that points to the header tag
const header = document.querySelector('header');

//Create button element
const headerButton = document.createElement('button');
headerButton.textContent = 'Home';

headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/'
});

//Create a div and give it a class
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

const headerRight = document.createElement('div');
headerRight.className = 'header-right';

//img element
const logoImg = document.createElement('img');
logoImg.src = '/logo.png';
logoImg.alt = 'Logo';

const h1 = document.createElement('h1');
h1.textContent = 'UnEarthed';

// Append the elements to the headerLeft div
headerLeft.appendChild(logoImg);
headerLeft.appendChild(h1);

headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);