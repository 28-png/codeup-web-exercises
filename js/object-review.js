
// Factory Function
function createCircle(radius) {
    return {
    radius: radius,
        draw: function () {
        console.log('draw')
    }
};
}

var circle = createCircle(1);

//Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}

var another = new Circle(1);