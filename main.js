const divToAnimate = document.getElementById('snek');
const currentPage = document.getElementsByTagName('body')[0].id;
let currentLocation = '';
let styles = '';

const pageLoadEvent = () => {
    if (currentPage === 'index') {
        console.log('index')
    } else {
        sideToSide();
    }
}
const moveToCorner = () => {
    divToAnimate.style.transition = "transform 2s ease 1s";
    divToAnimate.style.transform = "translate(-40%, -30%) scale(.40, .40)";
    styles = `
    #snek { 
        transform: translate(-40%, -30%) scale(.40, .40);}
        `;
}

const sideToSide = () => {
    if (divToAnimate.style.transform === '') {
        moveToCorner();
        currentLocation = divToAnimate.style.transform;
    } 
    else if (divToAnimate.style.transform === currentLocation) {
        divToAnimate.style.transition = "transform 2s ease 1s";
        divToAnimate.style.transform = "translateX(100%)";
        currentLocation = divToAnimate.style.transform;
        // StyleSheet.insertRule(`#snek { transform : ${currentLocation};}`, 0);
    }
}

// initialPosition();
window.addEventListener('load', pageLoadEvent);
// document.getElementById('myButton').addEventListener('click', slideClosed);
