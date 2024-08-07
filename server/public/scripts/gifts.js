const renderGifts = async () => {
    // Retrieve the gift data at the /gifts endpoint
    const response = await fetch('/gifts');

    // Parse the response as JSON
    const data = await response.json();

    // Conditional rendering based on if data exists
    if (data) {
        data.map(gift => {
            // Create the card element
            const card = document.createElement('div');
            card.classList.add('card');

            // Create the top container for the image
            const topContainer = document.createElement('div');
            topContainer.classList.add('top-container');

            // Create the image element
            const giftImage = document.createElement('img');
            giftImage.src = gift.image;
            giftImage.alt = gift.name;

            topContainer.appendChild(giftImage);

            // Create the bottom container for the text information
            const bottomContainer = document.createElement('div');
            bottomContainer.classList.add('bottom-container');

            // Add name
            const name = document.createElement('h3');
            name.textContent = gift.name;
            bottomContainer.appendChild(name);

            // Add price point
            const pricePoint = document.createElement('p');
            pricePoint.textContent = 'Price: ' + gift.pricePoint;
            bottomContainer.appendChild(pricePoint);

            // Add audience
            const audience = document.createElement('p');
            audience.textContent = 'Great For: ' + gift.audience;
            bottomContainer.appendChild(audience);

            // Create 'Read More' link
            const giftId = gift.id;
            const readMoreLink = document.createElement('a');
            readMoreLink.textContent = 'Read More >';
            readMoreLink.href = `/gifts/${giftId}`;
            readMoreLink.setAttribute('role', 'button');

            bottomContainer.appendChild(readMoreLink);

            // Append containers to the card
            card.appendChild(topContainer);
            card.appendChild(bottomContainer);

            // Append the card to the main content
            mainContent.appendChild(card);
        });
    } else {
        const noGiftsMsg = document.createElement('h2');
        noGiftsMsg.textContent = 'No Gifts Available 😞';
        mainContent.appendChild(noGiftsMsg);
    }
}

const mainContent = document.getElementById('main-content');
renderGifts();
