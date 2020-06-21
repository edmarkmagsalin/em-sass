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
        if(triggerPoint < window.innerHeight/1.5){
            fadeElement.classList.remove('start');
            fadeElement.parentElement.classList.remove('overflow-h');
            if(!fadeElement.parentElement.classList.values) {
                fadeElement.parentElement.removeAttribute('class');
            }
        }
    })
}

window.addEventListener('scroll', animate)
window.addEventListener('resize', animate)
window.addEventListener('load', animate)

// validate form
/************
- on blur and on change should just check the validity not if it has value
- submit should check validity and if the required fields has value
- when editing password, validate only on blur and submission
- password comparison is only activated when all password involved has value
************/

const form = document.querySelector('form');
const requiredFields = document.querySelectorAll('form input[type=text], form input[type=email], form input[type=password], form input[type=number], form input[type=checkbox], form input[type=radio], form textarea');
let passwordField = document.querySelector('form input[name=password]');
let password2Field = document.querySelector('form input[name=password2]');

function validateNullFields(fields) {
    // triggered by submission
    console.log(fields);
    fields.forEach(field => {
        if(field.value) {
            // handle pass
            field.classList.add('pass');
            field.classList.remove('error');
        } else {
            // handle error
            field.classList.add('error');
            field.classList.remove('pass');
            console.log(field.name + ' is blank.');
        }
    });
}

function validateNullField(field) {
    // triggered by blur, and input change
    if(field.value) {
        // handle pass
        field.classList.add('pass');
        field.classList.remove('error');
    } else {
        // handle error
        field.classList.remove('pass');
    }
}

function comparePasswords(pw, pw2) {
    // triggered by submission, blur, and input change
    if(pw.value === "" | pw2.value === "") {
        pw.classList.remove('pass');
        pw2.classList.remove('pass');
        pw.classList.remove('error');
        pw2.classList.remove('error');
        return false;
    }
    if(pw.value===pw2.value) {
        // handle pass
        pw.classList.add('pass');
        pw2.classList.add('pass');
        pw.classList.remove('error');
        pw2.classList.remove('error');
    } else {
        // handle error
        pw2.classList.add('error');
        pw2.classList.remove('pass');
        console.log(`${pw.value} and ${pw2.value} are not match`);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    comparePasswords(passwordField, password2Field);
    validateNullFields(requiredFields);
});

requiredFields.forEach(requiredField => {
    console.log(requiredField.name);
    requiredField.addEventListener('input', () => {
        validateNullField(requiredField);
    });
    requiredField.addEventListener('blur', () => {
        validateNullField(requiredField);
        if((requiredField.name === passwordField.name | requiredField.name === password2Field.name) && requiredField.value) {
            comparePasswords(passwordField, password2Field);
        }
    });
});