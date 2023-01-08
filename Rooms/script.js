class Room {
    constructor(name, length, width,){
        this.name = name;
        this.length = length;
        this.width = width;
        this.available = true;
    }

    getArea(){
        return this.length * this.width;
    }

    getPerimeter(){
        return 2 * (this.length + this.width);
    }
}

let room1 = new Room("Sun", 30, 20);
let room2 = new Room("Green", 15, 20, false);

console.log(room1, room1.getArea(), room1.getPerimeter());
console.log(room2, room2.getArea(), room2.getPerimeter());
console.log(room1.available);
console.log(room2.available);
