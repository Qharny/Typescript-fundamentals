class Point {
    x: number;
    y: number;
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getDistance(another: Point) {
        // ...
    }
}
let point= new Point();
point.x = 10;
point.y = 50;
point.draw()