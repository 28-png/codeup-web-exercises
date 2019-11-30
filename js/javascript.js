function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
       const input = arrow.previousElementSibling;
       const parent = arrow.parentElement;
       const nextForm = parent.nextElementSibling;
        });
    });
}

function validateUser(user) {
    if(user.value.length < 6) {
        console.log('not enough characters')
    }
}

function error(color) {
    document.body.backgroundColor = color;
}

animatedForm();