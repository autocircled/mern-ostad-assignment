class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(name, sound) {
        super(name, sound);
    }

    fetch() {
        console.log("Fetching the ball!");
    }
}




const animal = new Animal("Lion", "Roar");
animal.makeSound(); // Output: "Roar"

const dog = new Dog("Buddy", "Woof");
dog.makeSound(); // Output: "Woof"
dog.fetch(); // Output: "Fetching the ball!"