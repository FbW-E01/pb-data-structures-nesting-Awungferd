/* #### 1. 2D Array
* Given the 2D Array below, **loop** through the arrays to print the values.*/



let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];

// FIRST SOLUTION
for (let index = 0; index < board.length; index++) {console.log(board[index].join())
       
} 
//SECOND SOLUTION With nested "for loop"

for (let looper = 0; looper < board.length; looper++) {
    for (let looper2 = 0; looper2 < board[looper].length; looper2++) {
        const element = board[looper][looper2];
        console.log(element)
    }
    
}
// THIRD SOLUTION With function
function printOut(board) {
    for (let i = 0; i < board.length; i++) {
        const element = board[i].join();

      console.log(element)
        
    }
}
printOut(board) 


/* #### 2. Doggo
* 2.1 Create a doggo object. Add name and breed as properties of the object.
* 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
*  */

let doggo= {
    name: "Jack Russel",    
    breed: "Terrier",
    favoriteFoods:["wild mice", "bones","squirrels","game entrails"]
}
//2.3 Access the second element of the doggo's favorite foods. 
console.log("One of doggo's favorite food:", doggo.favoriteFoods[1])



//2.4 Add a method that loops through and print all the doggo's favorite food */

for (let series = 0; series < doggo.favoriteFoods.length; series++) {
    const element = doggo.favoriteFoods[series];
    console.log(element)
}

/* #### 3. 
* 3.1 Create an object called recipes.
* 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 
* 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
* 3.4 Change the ingredient `sugar` to `brown sugar`. 
* 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 
 */
let recipes = {
    ingredients:{
        butter: "50 grams",
        sugar: "10 grams",
        flour: "1kg",
        nutmeg: "10grams"
    }
    
}
//3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
recipes = { ...recipes.ingredients, ginger: "8 grams" }
console.log(recipes)

//3.4 Change the ingredient `sugar` to `brown sugar`. 
 function renameSugar(sugar, brownSugar) {
  recipes.ingredients[brownSugar] = recipes.ingredients[sugar];
  delete recipes.ingredients[sugar];
 }
console.log(renameSugar(recipes))

//NB I got stuck on this question at night. Will come back to it later