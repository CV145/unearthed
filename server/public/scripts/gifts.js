//Contain all JS code to add elements to the <main> element

const renderGifts = async () => {
    //Retrieve the gift data at the /gifts endpoint
    const response = await fetch('/gifts');

    //Parse the response as JSON
    const data = await response.json();
}

const mainContent = document.getElementById('main-content')

//conditional rendering based on if data exists
if (data) {
    data.map(gift => {
        const card = document.createElement('div');
        //can add multiple classes to element
        card.classList.add('card');

        const topContainer = document.createElement('div')
        topContainer.classList.add('top-container')

        const bottomContainer = document.createElement('div')
        bottomContainer.classList.add('bottom-container')

        topContainer.style.backgroundImage = `url(${gift.image})`;

        const name = document.createElement('h3')
        name.textContent = gift.name
        bottomContainer.appendChild(name)

        const pricePoint = document.createElement('p')
        pricePoint.textContent = 'Price: ' + gift.pricePoint
        bottomContainer.appendChild(pricePoint)

        const audience = document.createElement('p')
        audience.textContent = 'Great For: ' + gift.audience
        bottomContainer.appendChild(audience)

        const giftId = gift.id;
        const readMoreLink = document.createElement('a');
        readMoreLink.textContent = 'Read More >';
        readMoreLink.href = `/gifts/${giftId}`;
        readMoreLink.setAttribute('role', 'button');

        bottomContainer.appendChild(readMoreLink);

        card.appendChild(topContainer);
        card.appendChild(bottomContainer);

        mainContent.appendChild(card);
    });
}
else {
    const noGiftsMsg = document.createElement('h2');
    noGiftsMsg.textContent = 'No Gifts Available 😞';
    mainContent.appendChild(noGiftsMsg);
}

renderGifts();