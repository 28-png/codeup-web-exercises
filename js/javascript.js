const arrows = document.querySelectorAll(".fa-arrow-down");
function animatedForm() {

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if(input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === "password" && validatePassword(input)) {
                nextSlide(parent, nextForm);
            } else {
                parent.style.animation = "shake 0.5s ease";

            }
        });
    });
}

function validateUser(user) {
    if(user.value.length < 6) {
        error('rgb(189, 87, 87)');
        console.log('not enough characters')
    } else {
        error('rgb(87, 189, 130)');
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)) {
        error('rgb(87, 189, 130)');
        return true;
    } else {
        error('rgb(189, 87, 87)');
    }
}



function validatePassword(password) {
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const mediumRegex = new RegExp('^((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9]))(?=.{6,})');
    if(strongRegex.test(password.value)) {
        error('rgb(87, 189, 130)');
        return true;
    } else if(mediumRegex.test(password.value)) {
        error('rgb(255, 126, 0)')
    } else {
        error('rgb(189, 87, 87)');

    }
}

var check = function() {
    if (document.getElementById('password').value === document.getElementById('confirm_password').value) {
        error('rgb(87, 189, 130)');
        return true;
    } else {
        error('rgb(255, 191, 0)');
        return false;
    }
}
var passwordEntry = $('#password').value;
var passwordReEntry = $('#confirm_password').value;

function validatePassword2() {
    let validator = $(".validateForm").validate({
        rules: {
            password: "required",
          confirm_password: {
                equalTo: "#password"
            }
        },
        messages: {
           password: " Enter Password",
            confirm_password: " Passwords Must Match"
        }
    });
        validator.form();
    console.log(validator.form());


}

function nextSlide(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color) {
    document.body.style.backgroundColor = color;
}

animatedForm();