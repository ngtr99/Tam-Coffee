
// Create the wellcome message
document.body.style.backgroundImage = "url('header.png')";
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';

// Create the flower image
const button = document.createElement('button');
button.onclick = moveCloud;
button.className = 'nav-button-home';
button.textContent = 'Go to Home';
document.body.appendChild(button);

function moveCloud() {};

button.addEventListener('click', function() {
    const cloud = document.createElement('img');
    cloud.src = 'cloud.png';
    cloud.style.position = 'absolute';
    cloud.style.left = '0';
    cloud.style.top = '50%';
    cloud.style.transform = 'translateY(-50%)';
    cloud.style.transition = 'left 3s';
    cloud.style.overflow = 'visible';
    document.body.appendChild(cloud);

setTimeout(() => {
    cloud.style.left = '100%';
}, 0);

    // Create the option page
    document.body.style.backgroundImage = "url('background.png')";
    document.querySelector('nav').style.display = 'block'; 
});

document.querySelector('.nav-button-services').addEventListener('click', function() {
    


});