const body = document.body;
const toggle = document.querySelector('#toggle');

switchTheme = () => {
    body.getAttribute("data-theme") !== "dark" ? body.setAttribute("data-theme", "dark") : body.setAttribute("data-theme", "default")
}

toggle.addEventListener('input', switchTheme)