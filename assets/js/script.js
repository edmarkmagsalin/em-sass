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

function placeLabel() {
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

//animation
const fadeElements = document.querySelectorAll('.fade-up, .fade-down, .fade-left, .fade-right');

fadeElements.forEach(fadeElement => {
    fadeElement.parentElement.classList.add('overflow-h');
    fadeElement.classList.add('start');
})

function animate() {
    fadeElements.forEach(fadeElement => {
        let triggerPoint = fadeElement.getBoundingClientRect().top;
        fadeElement.classList.add('transition');
        fadeElement.classList.contains('fade-up') && triggerPoint==triggerPoint-100
        triggerPoint < window.innerHeight/1.5 && fadeElement.classList.remove('start')
    })
}

window.addEventListener('scroll', animate)
window.addEventListener('resize', animate)
window.addEventListener('load', animate)