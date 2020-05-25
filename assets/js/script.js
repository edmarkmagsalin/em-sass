const body = document.body;
const toggle = document.querySelector('#toggle');

setTheme = () => {
    let dataTheme = localStorage.getItem("data-theme") || "default";
    dataTheme === "dark" && toggle.setAttribute("checked", "true")
    body.setAttribute("data-theme", dataTheme)
}
setTheme();

switchTheme = () => {
    localStorage.getItem("data-theme") !== "dark" ? localStorage.setItem("data-theme", "dark") : localStorage.setItem("data-theme", "default")
    setTheme();
}
toggle.addEventListener('input', switchTheme);