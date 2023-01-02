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
// for (let key in myPenguin){
//     console.log(`${key} : ${myPenguin[key]} `);
// }

 // ####### EX4 #######

 // 1)

 myPenguin.favoriteFoods = ["food 1", "food 2", "food 3"]

 // 2)
//  console.log(myPenguin.favoriteFoods[1]);

// 3)

let firstFavFoods = myPenguin.favoriteFoods[0]

// 4)
myPenguin.favoriteFoods.push("food 4");

// 5)
// console.log(myPenguin.favoriteFoods.length);

// 6)
myPenguin.favoriteFoods.splice(myPenguin.favoriteFoods.length - 1, 1, "pineapples")
// console.log(myPenguin.favoriteFoods);

// 7)
let lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length -1];

// 8)
// for (const food in myPenguin.favoriteFoods){
//     console.log(myPenguin.favoriteFoods[food]);
// }


// ############ EX5 ###############

const gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    },
  };
  
  const ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    },
  };
  
  const fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    },
  };

  
  // 1) 

  let penguins = [gunter,ramon,fred];

  // 2)
//   console.log(penguins[0]);

// 3)
//   let secondPenguin = penguins[1];

// 4)
// console.log(penguins[penguins.length - 1].name);

// 5)
penguins.push(myPenguin);

// 6)
// console.log(penguins.length);

// 7)
penguins[0].canFly = true

// 8)
penguins[0].sayHello()

// 9)

// for (let p in penguins){
//     console.log(penguins[p].name);
// }


// 10)
// for (let p in penguins){
//     penguins[p].sayHello()
// }

// 11)
for (let p in penguins){
    penguins[p].numberOfFeet = 2
}

// 12)
for (let p in penguins){
    if (penguins[p].canFly){
        console.log(`${penguins[p].name} can fly!`);
    }
    }