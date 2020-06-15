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
const afuElements = document.querySelectorAll('.animate-fade-up');
afuElements.forEach(afuElement => {
    afuElement.classList.add('start');
    console.log(afuElement.offsetTop);
    console.log('top: ', afuElement.getBoundingClientRect().top);
    console.log('bottom: ', afuElement.getBoundingClientRect().bottom);
    console.log('left: ', afuElement.getBoundingClientRect().left);
    console.log('right: ', afuElement.getBoundingClientRect().right);
    console.log('height: ', afuElement.getBoundingClientRect().height);
    console.log('width: ', afuElement.getBoundingClientRect().width);
    console.log('scrollY: ', window.scrollY);
    console.log('innerHeight: ', window.innerHeight);
    console.log('----------------------');
})


function loadAnimation () {
    afuElements.forEach(afuElement => {
        console.log(afuElement.offsetTop);
        console.log('top: ', afuElement.getBoundingClientRect().top);
        console.log('bottom: ', afuElement.getBoundingClientRect().bottom);
        console.log('left: ', afuElement.getBoundingClientRect().left);
        console.log('right: ', afuElement.getBoundingClientRect().right);
        console.log('height: ', afuElement.getBoundingClientRect().height);
        console.log('width: ', afuElement.getBoundingClientRect().width);
        console.log('scrollY: ', window.scrollY);
        console.log('innerHeight: ', window.innerHeight);
        console.log('----------------------');
        afuElement.classList.remove('start');
    })
}
window.addEventListener('load', loadAnimation)