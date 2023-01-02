let myPenguin = {
    "the character's name" : "Alfred" , 
    "origin" : "Zig et Puce",
    "author" : "Alain Saint-Ogan"
}
// 2)
// console.log(`Hello, I'm a penguin and my name is ${myPenguin["the character's name"]}`);

// 3)
myPenguin.canFly = false;

// 4)
myPenguin.chirp = function () {
    console.log("CHIRP CHIRP! Is this what penguins sound like?");
}

// 5)
myPenguin.sayHello = function () {
    console.log(`Hello, I'm a penguin and my name is ${this["the character's name"]}`);
}

// 6)
// myPenguin.sayHello()

// 7)
myPenguin["the character's name"] = "Penguin McPenguinFace"
// myPenguin.sayHello()

// 8)
myPenguin.fly = function () {
    if (this.canFly){
        console.log("I can fly!");
    }
    else {
        console.log("No flying for me!");
    }
}

// 10)
// myPenguin.fly()

// 11)
myPenguin.canFly = true;
// myPenguin.fly()

// 13)
for (let key in myPenguin){
    console.log(`${key} : ${myPenguin[key]} `);
}


