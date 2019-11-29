function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementsSibling;
    const parent = arrow.parentElement;
    const nextForm = parent.nextElementSibling;


    if(input.type === "text" && validateUser(input)) {
        console.log("confirmed");
    }


});
});
}

function validateUser(user) {
    if(user.value.length < 6) {
        console.log("not long enough");
        error("rgb(189, 87,87");
    } else {
        error("rgb(87, 189, 130");
        return true;
    }
}

function error(color) {
    document.body.style.backgroundColor = color;
}


animatedForm();