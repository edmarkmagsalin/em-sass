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

//animation on scroll
const animateFadeUpElements = document.querySelectorAll('.animate-fade-up');

animate = () => {
    animateFadeUpElements.forEach(animateFadeUpElement => {
       if(animateFadeUpElement.getBoundingClientRect().top < window.scrollY+window.screen.height/2) {
           animateFadeUpElement.classList.remove('start');
       } else {
        animateFadeUpElement.classList.add('start');
       }
       console.log(animateFadeUpElement);
       console.log(animateFadeUpElement.getBoundingClientRect(), window.scrollY+window.screen.height/2);
    })
}
animate();
window.addEventListener('scroll', animate)