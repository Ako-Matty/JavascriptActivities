// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever is new"

// ];

// coffeeOrder.push("Donna - Expresso");

// coffeeOrder.pop(); 

// coffeeOrder.splice(1, 1)

// console.log(coffeeOrder)

// songs

// let favouriteSongs = [
//     "All too well - Taylor Swift",
//     "Cannibal Corpse - Hammer Smashed Face",
//     "Its my life"
// ];

// favouriteSongs.push("Baby Shark");
// favouriteSongs.push("American Idiot");

// favouriteSongs.pop();





// console.log(favouriteSongs)



// const atlantis = new Map();

// atlantis.set(`a`, 1);
// atlantis.set(`b`, 2);
// atlantis.set(`c`, 3);

// console.log(atlantis.get(`b`));



// let favouriteDrinks =[
//     "coffee",
//     "orange",
//     "milshake",

// ];

// for(let i = 0; i < favouriteDrinks.length; i++)

// console.log(favouriteDrinks[i]);











// Activity1

// let favouriteMovies = [
//     "Harry Potter and the Prizoner Of Azkaban",
//     "Mad Max Fury Road",
//     "Treasure Planet"
// ]

// favouriteMovies.push("SpiderMan 2")
// favouriteMovies.push("Avengers Infinity War")


// for(let i = 0; i < favouriteMovies.length; i++)

// console.log(favouriteMovies)





// Activity2 


// let = "x"
// let = "y"
// let = "z"
// let = "a"
// let = "b"
// let = "c"

// x = Math.floor(Math.random() *50);

// console.log(x);

// y = Math.floor(Math.random() *50);

// console.log(y);

// z = Math.floor(Math.random() *6) + 1;

// console.log(z);


// for (let index = 0; index < 6; index++) {
    
//     console.log( Math.floor(Math.random() *50))
    
    
// }






// let = "a"

// a = Math.floor(Math.random() *50);
// for(let i = 0; i < 6; i++){
//     if (i % 1 == 0){
//     ;
//     } console.log(`a`); Math.random() *50;

// }




// Activity 3 If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Create a program that does this.

// var ourArray = [];
//     for (var i = 9; i > -1; i -=1){
//         ourArray.push(i);
//     }



// console.log(ourArray)



// Activity4 Displays 4 films stored in an array. Use a for loop to show each film in the array. Use an if statement to check if the 3rd film in the array is Ghostbusters.
// If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo!
// we want Ghostbusters!


// let favouriteMovies = [
//     "Harry Potter and the Prizoner Of Azkaban",
//     "Mad Max Fury Road",
//     "Treasure Planet",
//     "Frozen"]

//     for(let i = 3; i < favouriteMovies.length; i++)

//     if ()

// console.log(favouriteMovies)



// Activity 5



// for(let i = 0; i < 6; i++){
//     let a = Math.floor(Math.random() *30);
//     if (a % 7 == 0){
//         console.log(`${a} is divisible.`);
//     } else{
//         console.log(a)
//     } 
// } 




// Activity 6 "Imagine you’re a programmer for a social media platform! You have
// been tasked with building a prototype for a mutual followers program.
// > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
// In these arrays place 4 names as strings. Make sure there are 2 names
// that are in BOTH arrays.
// > Using a nested loop iterate over both arrays and console.log out the
// matching follower."



  
//   const bobsFollowers = [
//     "Phil",
//     "Jerry",
//     "Dawn",
//     "Zeus"];
    
//   const hannahsFollowers = [
//     "Will",
//     "Simon",
//     "Jay",
//     "Neil"];



// let matchingFollower = [];



//     for (let i=0;  i < bobsFollowers.length; i++){

//         for (let j = 0; j < hannahsFollowers.length; j++) {

//             if (bobsFollowers[i] && hannahsFollowers[j]) { matchingFollower.push(bobsFollowers[j]); } 
//     }

// };
//     console.log(matchingFollower);



    let bobsFollowers = ["will","Simon","WIll","Jay"];
    let hannahsFollowers = ["jack","liz","rose","kath"];
    let commonFollowers = [];
    
    for(i=0; i<bobsFollowers.length; i++){
        for(j=0; j<hannahsFollowers.length; j++){
            if(bobsFollowers[i] == hannahsFollowers[j]){
        commonFollowers.push(bobsFollowers[i]);
            }
        }
    }
    console.log(commonFollowers);


// Activity 7


