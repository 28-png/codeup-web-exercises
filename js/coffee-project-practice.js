"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
   html += '<p>' + coffee.roast + '</p>';
   html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
           filteredCoffees.push(coffee);
        } else if ('all roast' === selectedRoast)
            filteredCoffees.push(coffee);

    });
    pList.innerHTML = renderCoffees(filteredCoffees);
}

function search_coffee() {
    var input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
    var x = document.getElementsByClassName('coffee');
    for (var i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
           x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
}


function addCoffee(inputName, roastType) {
    var addNewCoffee = {id: coffees.length + 1, name: inputName, roast: roastType};
    coffees.push(addNewCoffee);
    localStorage.setItem("coffees", JSON.stringify(coffees));

}



var coffees = [
    {id: 1, name: 'National Treasure 2 Light City', roast: 'light' },
    {id: 2, name: 'National Treasure Half City', roast: 'light' },
    {id: 3, name: 'Con-Air Cinnamon', roast: 'light' },
    {id: 4, name: 'Drive Angry City', roast: 'medium' },
    {id: 5, name: 'Gone in Sixty Seconds American', roast: 'medium' },
    {id: 6, name: 'Face-Off Breakfast', roast: 'medium' },
    {id: 7, name: 'Matchstick Men High', roast: 'dark' },
    {id: 8, name: 'The Wicker Man Continental', roast: 'dark' },
    {id: 9, name: 'Lord Of War New Orleans', roast: 'dark' },
    {id: 10, name: 'The European Ant Bully', roast: 'dark' },
    {id: 11, name: 'World Trade Center Espresso', roast: 'dark' },
    {id: 12, name: 'Bangkok Dangerous Viennese', roast: 'dark' },
    {id: 13, name: 'Grindhouse Italian', roast: 'dark' },
    {id: 14, name: 'The French Family Man', roast: 'dark'}
];


var addRoast = document.querySelector('#button');
addRoast.addEventListener('click', function() {
    var coffeeName = document.getElementById('addCoffees');
    var coffeeRoast = document.getElementById('roast-selection2');
    if(coffeeName.value !== '') {
        addCoffee(coffeeName.value, coffeeRoast.value);
        updateCoffees();
    }
    coffeeName.value = '';
});



var coffeeList = document.getElementById('coffees')
var pList = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

roastSelection.addEventListener('click', updateCoffees);
submitButton.addEventListener('click', updateCoffees);
