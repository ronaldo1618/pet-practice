const mypet = {
    name: "thor",
    species: "husky",
    nicknames: ["stinky", "rebel"],
    age: 3,
    bark: function () {
        console.log("Hellooo!");
    },
    whine: function () {
        console.log("Pay attention to Meee");
    },
    hungry: function () {
        console.log("Feed Mee!");
    },
    favoriteToys: [],
    play: function (toy) {
        if (toy.includes("squeaky")) {
            this.favoriteToys.push(toy);
        }
    }
}

mypet.bark()
mypet.whine()
mypet.hungry()

mypet.play("squeaky ball");
mypet.play("another squeaky toy -_-")
console.log(mypet.favoriteToys)