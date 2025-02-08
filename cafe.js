// Menu Coffee

const menuCoffee = {
    'Cà phê': {
        'Cà phê sữa phin / máy': '12.000',
        'Cà phê đen phim / máy': '10.000',
        'Cà phê sữa Sài Gòn phin / máy': '15.000',
        'Cà phê đen Sài Gòn phin / máy': '15.000',
        'Bạc xỉu': '15.000',
        'Cà phê đá xay': '15.000',
        'Cà phê dừa': '18.000'
    },
    'Sữa': {
        'Sữa tươi': '10.000',
        'Sữa Cacao': '15.000',
        'Sữa nóng': '10.000',
        'Sữa đá đập': '12.000',
    },
    'Trà Lipton': {
        'Trà Lipton nóng / đá': '10.000',
        'Trà Chanh' : '12.000',
        'Trà Đào': '15.000',
        'Trà Gừng': '12.000'
    },
    'Đá xay': {
        'Việt quốc': '15.000',
        'Dâu': '15.000',
        'Kiwi': '15.000',
        'Chocolate': '18.000',
    },
    'Nước ép': {
        'Nước ép cam': '15.000',
        'Nước ép cà rốt': '12.000',
        'Nước ép cà chua': '12.000',
        "Nước ép dứa": '12.000',
        'Nước ép dưa hấu':'12.000',
        'Nước ép chanh dây': '12.000',
        'Nước chanh nóng / đá': '10.000',
        'Nước chanh xí muội': '12.000'
    },
    'Trà sữa': {
        'Sữa tươi trân châu đường đen':'18.000',
        'Trà sữa truyền thống có thạch': '18.000'
    },
    'Sữa chua': {
        'Sữa chua đá': '10.000',
        'Sữa chua việt quốc': '15.000',
        'Sữa chua dâu': '15.000',
        'Sữa chua kiwi': '15.000',
        'Sữa chua cam': '15.000'
    }
};


const menuContainer = document.createElement('div');
menuContainer.className = 'menu-container';
document.body.appendChild(menuContainer);

for (const category in menuCoffee) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';
    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = category;
    categoryDiv.appendChild(categoryTitle);

    const itemsList = document.createElement('div');
    for (const item in menuCoffee[category]) {
        const itemLi = document.createElement('div');
        itemLi.textContent = `${item}: ${menuCoffee[category][item]}`;
        itemsList.appendChild(itemLi);
    }

    categoryDiv.appendChild(itemsList);
    menuContainer.appendChild(categoryDiv);
}



// Contact


// Add the information
const contactContainer = document.createElement('div');
contactContainer.className = 'contact-container';
document.body.appendChild(contactContainer);

contactContainer.textContent = "Address: 216 Huynh Tan Phat, Khue Trung, Cam Le - Phone: 0906-55-88-58" 



// Order table
const bookingContainer = document.createElement('div');
bookingContainer.className = 'booking-container';
document.body.appendChild(bookingContainer);


bookingContainer.innerHTML += ` <div>You can order your favorite drinks at here:</div>
                                <div id = "name">Name: <input type="name"></div>
                                <div id = "phone" >Phone: <input type="number"></div>
                                <button class="order">Order</button>
                                <div id = "total">Total: 0</div>`



// Order table
const bookingTable = document.createElement('div');
bookingTable.className = 'booking-table';
document.querySelector('.booking-container').appendChild(bookingTable);

for (const key in menuCoffee) {
    bookingTable.innerHTML += `<div class="key">${key}</div>`;
    for (const value in menuCoffee[key]) {
        const price = Number(menuCoffee[key][value].replace(".", ""));
        bookingTable.innerHTML += `<div><input type="checkbox" class="value" data-price="${price}" data-items="${value}">${value}: ${menuCoffee[key][value]}</div>`;
    }
}

// Total 

var sum = 0;
const checkboxes = document.querySelectorAll('.value');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const price = Number(this.getAttribute('data-price'));
        if (this.checked) {
            sum += price;
        } else {
            sum -= price;
        }
        const totalSumElement = document.getElementById('total');
        if (totalSumElement) {
            totalSumElement.textContent = 'Total : ' + sum + ' VND';
        }
    });
});



// Comment
const commentTable = document.createElement('div');
commentTable.className = 'comment-table';
document.body.appendChild(commentTable);

// The feedback detail

const feedbackDetail = document.createElement('textarea');
feedbackDetail.className = 'feedback-detail';
feedbackDetail.setAttribute('placeholder', "\nPlease enter your feeddback. Your feedback is valuable to us.");
commentTable.appendChild(feedbackDetail);



// Button

// Menu button
const menu = document.createElement('button');
menu.className = 'menu';
menu.textContent = 'Menu';
document.querySelector('.container-btn').appendChild(menu);

menu.addEventListener('click', function() {
    document.querySelector('.contact').style.display = 'none';
    document.querySelector('.comment').style.display = 'none';

    document.querySelector('.menu-container').style.display = 'block';
});




// Contact button
const contact = document.createElement('button');
contact.className = 'contact';
contact.textContent = 'Contact';
document.querySelector('.container-btn').appendChild(contact);

contact.addEventListener('click', function() {
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.comment').style.display = 'none';
    
    document.querySelector('.booking-container').style.display = 'block';
    document.querySelector('.booking-table').style.display = "block";
    
});

// Order button
const orderButton = document.querySelector('.order');
orderButton.addEventListener('click', function() {
    alert("Your orders are successful!");

    // The order detail
    let email = "The total is " + sum + ". The order includes: ";
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            email += checkbox.getAttribute('data-items') + ", ";
        }
    });

    // Create a mailto link
    const emailBody = encodeURIComponent(`I would like to order some coffee: ${email}`);
    const emailSubject = encodeURIComponent('New Order');
    const emailTo = "minhnguyet12923@gmail.com";
    
    const mailtoLink = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
    
    // Open the email client with the pre-filled details
    window.location.href = mailtoLink;
});






// Comment button
const comment = document.createElement('button');
comment.className = 'comment';
comment.textContent = 'Comment';
document.querySelector('.container-btn').appendChild(comment);

comment.addEventListener('click', function() {
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';

    document.querySelector('.comment-table').style.display = 'block';
    document.querySelector('.feedback').style.display = 'block';
});


// Comment button
const feedback = document.createElement('button');
feedback.className = 'feedback';
feedback.textContent = 'Send';
document.body.appendChild(feedback);

feedback.addEventListener('click', function() {
    alert("Your feedback is sent!");

    // Create a mailto link
    const emailBody = encodeURIComponent(feedbackDetail.value);
    const emailSubject = encodeURIComponent('The Feedback');
    const emailTo = "minhnguyet12923@gmail.com";
    
    const mailtoLink = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
    
    // Open the email client with the pre-filled details
    window.location.href = mailtoLink;
});

// Home button
const home = document.createElement('button');
home.className = 'home';
home.textContent = 'Home';
document.body.appendChild(home);

home.addEventListener('click', function() {
    document.querySelector('.menu').style.display = 'block';
    document.querySelector('.contact').style.display = 'block';
    document.querySelector('.comment').style.display = 'block';
    document.querySelector('.menu-container').style.display = 'none';
    document.querySelector('.booking-container').style.display = 'none';
    document.querySelector('.comment-table').style.display = 'none';
    document.querySelector('.feedback').style.display = 'none';
});




