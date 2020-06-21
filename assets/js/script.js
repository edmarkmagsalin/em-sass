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
************/

const form = document.querySelector('form');
const requiredFields = document.querySelectorAll('form input, form textarea');
let passwordFields = document.querySelectorAll('form input[name=password], form input[name=password2]');

function validateNullFields(fields) {
    // triggered by submission
    fields.forEach(field => {
        if(field.value) {
            // handle pass
            field.classList.add('pass');
            field.classList.remove('error');
        } else {
            // handle error
            field.classList.add('error');
            field.classList.remove('pass');
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

function comparePasswords(pws = []) {
    // triggered by submission, blur, and input change
    let passwords = [];
    pws.forEach(pw => {
        passwords.push(pw.value)
    })
    if(passwords.some((value => value === ''))) {
        return false;
    }
    if(passwords.every((value => value === passwords[0]))) {
        // handle pass
        password.classList.add('pass');
        password2.classList.add('pass');
        password.classList.remove('error');
        password2.classList.remove('error');
        console.log('password match');
    } else {
        // handle error
        password.classList.add('error');
        password2.classList.add('error');
        password.classList.remove('pass');
        password2.classList.remove('pass');
        console.log('password not match');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    comparePasswords(passwordFields);
    validateNullFields(requiredFields);
});

requiredFields.forEach(requiredField => {
    requiredField.addEventListener('input', () => {
        validateNullField(requiredField);
        passwordFields.forEach(passwordField => {
            if(passwordField.name === requiredField.name && requiredField.value) {
                comparePasswords(passwordFields);
            }
        });
    });
    requiredField.addEventListener('blur', () => {
        validateNullField(requiredField);
        passwordFields.forEach(passwordField => {
            if(passwordField.name === requiredField.name && requiredField.value) {
                comparePasswords(passwordFields);
            }
        });
    });
});