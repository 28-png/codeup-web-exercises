function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");

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
    if (password.value.length < 10) {
       error('rgb(189, 87, 87)');
    } else {
       error('rgb(87, 189, 130)');
       return true;
    }
}

var check = function() {
    if(document.getElementById('password').value === document.getElementById('confirm_password').value) {
        error('rgb(87, 189, 130)');
        return true;
    } else {
    error('rgb(189, 87, 87)');
    }
}

// function validatePassword2(password2) {
//     if (password2.length.value !== password.length.vaule) {
//         error('rgb(189, 87, 87)');
//     } else {
//        error('rgb(87, 189, 130)');
//         return true;
//     }
// }



function nextSlide(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color) {
    document.body.style.backgroundColor = color;
}

animatedForm();