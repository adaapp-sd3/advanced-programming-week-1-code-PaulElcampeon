class Button {
    constructor(label, x, y) {
        this.label = label;
        this.x = x;
        this.y = y;
    }

    containsPoints(x, y) {
        var left = this.x;
        var right = this.x + 100;
        var up = this.y;
        var down = this.y + 50;

        var inHorizontalRange = left < x && x < right;
        var inVerticalRange = up < y && y < down;

        return inHorizontalRange && inVerticalRange;
    }

    containsMouse(){
        return this.containsPoints(mouseX, mouseY);
    }

    draw() {
        if (this.containsMouse()) {
            fill('blue');
        } else {
            fill('red');
        }
        
        rect(this.x, this.y, 100, 50);
        textAlign(CENTER);
        text(this.label, this.x, this.y);
    }
}