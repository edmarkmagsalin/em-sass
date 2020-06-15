//animation on scroll
const fadeUpElements = document.querySelectorAll('.fade-up');
fadeUpElements.forEach(fadeUpElement => {
    fadeUpElement.classList.remove('transition');
    fadeUpElement.classList.add('start');
})

function loadAnimation () {
    fadeUpElements.forEach(fadeUpElement => {
        fadeUpElement.classList.add('transition');
        if(fadeUpElement.getBoundingClientRect().top < window.innerHeight/1.5) {
            fadeUpElement.classList.remove('start');
        }
    })
}
function animate () {
    fadeUpElements.forEach(fadeUpElement => {
        if(fadeUpElement.getBoundingClientRect().top < window.innerHeight/1.5) {
            fadeUpElement.classList.remove('start');
        } 
        console.log('initial distance from top: ', fadeUpElement.offsetTop);
        console.log('top: ', fadeUpElement.getBoundingClientRect().top);
        console.log('bottom: ', fadeUpElement.getBoundingClientRect().bottom);
        console.log('height: ', fadeUpElement.getBoundingClientRect().height);
        console.log('width: ', fadeUpElement.getBoundingClientRect().width);
        console.log('scrollY: ', window.scrollY);
        console.log('innerHeight: ', window.innerHeight);
        console.log('innerHeight/1.5: ', window.innerHeight/1.5);
        console.log('----------------------');
    })
}

window.addEventListener('load', loadAnimation)
window.addEventListener('scroll', animate)
window.addEventListener('resize', animate)

// dark mode togggle
const toggle = document.querySelector('#darkmode');
setTheme = () => {
    let dataTheme = localStorage.getItem("data-theme") || "default";
    dataTheme === "dark" && toggle.setAttribute("checked", "true")
    document.body.setAttribute("data-theme", dataTheme)
}
setTheme();

switchTheme = () => {
    localStorage.getItem("data-theme") !== "dark" ? localStorage.setItem("data-theme", "dark") : localStorage.setItem("data-theme", "default")
    setTheme();
}
toggle.addEventListener('input', switchTheme);

// place label
const labeledInputs = document.querySelectorAll('.labeled-input > input[type=text], .labeled-input > input[type=email], .labeled-input > input[type=password], .labeled-input > input[type=number], .labeled-input > textarea');

function placeLabel () {
    if(this.value) {
        this.classList.remove('place-label');
    }
    else {
        this.classList.add('place-label');
    }
}

labeledInputs.forEach(labeledInput => {
    labeledInput.classList.add('place-label');
    labeledInput.addEventListener('focus', placeLabel);
    labeledInput.addEventListener('input', placeLabel);
});