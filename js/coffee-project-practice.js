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

var coffeeList = document.getElementById('coffees');

function updateCoffees() {
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if(coffee.roast === selectedRoast || selectedRoast === 'all roast') {
            if(coffee.name.toLowerCase().includes(selectCoffee.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees)
}

function addCoffee(inputName, roastType) {
    var addNewCoffee = {id: coffees.length + 1, name: inputName, roast: roastType};
    coffees.push(addNewCoffee);
    localStorage.setItem("coffees", JSON.stringify(coffees));

}

function removeCoffees(coffeeInput) {
    coffees.forEach(function(coffee) {
       if(coffee.name.toLowerCase() === coffeeInput.toLowerCase()) {
           coffees.splice(coffees.indexOf(coffee), 1);
       }
       localStorage.setItem("coffees", JSON.stringify(coffees));
    });
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

var selectedRoast = 'all roast';
var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener('change', function() {
    selectedRoast = roastSelection.value;
    updateCoffees()
});

var selectCoffee = '';
var searchCoffee = document.getElementById('searchbar');
searchCoffee.addEventListener('keyup', function() {
   selectCoffee = searchCoffee.value;
   updateCoffees();
});


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

var removeCoffee = document.querySelector('#button2');
removeCoffee.addEventListener('click', function() {
var removeCoffeeInput = document.getElementById('removeCoffees');
if(removeCoffeeInput.value !== '') {
    removeCoffees(removeCoffeeInput.value);
    updateCoffees()
}
removeCoffeeInput.value = '';
});




var submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', updateCoffees);



if(localStorage.getItem("coffees") !== null) {
    coffees = localStorage.getItem("coffees");
    coffees = JSON.parse(coffees);
    coffeeList.innerHTML = renderCoffees(coffees);
} else {
    coffeeList.innerHTML = renderCoffees(coffees);

}
