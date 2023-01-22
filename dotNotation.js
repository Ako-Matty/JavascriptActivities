// console.log ("Hello World".length)











// console.log("|_______|_______|\n|_______|_______|\n|_______|_______|\n|_______|_______|") 
    
    






// GRID CHALLENGE//

let GRID =[
    "|----------|",
    "|__________|",
    "|__________|",

];

for(let i = 0; i < GRID.length; i++) {
    if (i * 2 ==0){
        GRID.push(i);
    }

    console.log(GRID); 
}
