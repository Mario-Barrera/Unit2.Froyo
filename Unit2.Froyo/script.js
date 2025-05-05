// Prompt the user
const userInput = prompt("Enter a list of froyo flavors separated by a comma: ");
console.log(userInput);



// Parsing the input into an array:
const flavors = userInput.split(",").map(function(flavor) {         // map creates a new array by applying this function
        return flavor.trim();                                       // trim is a built-in JS function that removes unwanted spaces from both ends of a string
});

console.log(flavors);



// Function to count how many times each flavor appears
function countFlavors(array) {
    const counter = {};                                 // Initialize an empty object to store the counts.
    for (let i = 0; i < array.length; i++) {
        const flavor = array[i];                        // loop through each element of the array
        if (counter[flavor]) {
            counter[flavor]++;              // If flavor is already in the object, increment its count
        } else {
            counter[flavor] = 1;            // If flavor is not yet in the object, initialize its count to 1
        }
    }
    return counter;
}


const flavorCounter = countFlavors(flavors);
console.table(flavorCounter);



//Modifying object properties by adding assigned numbers to current values of the flavorCounter
flavorCounter.vanilla = (flavorCounter.vanilla || 0) + 5;
flavorCounter.chocolate = (flavorCounter.chocolate || 0) + 10;
flavorCounter.original = (flavorCounter.original || 0) + 6;
flavorCounter.peach = (flavorCounter.peach || 0) + 8;
flavorCounter.mango = (flavorCounter.mango || 0) + 5;
flavorCounter.coffee = (flavorCounter.coffee || 0) + 7;
flavorCounter.strawberry = (flavorCounter.strawberry || 0) + 5;



//Adding a new key-value pairs
flavorCounter["newflavor1"] = "eggnog";
flavorCounter["newflavor2"] = "peppermint";
flavorCounter["newflavor3"] = "apple pie";


//Deleting key-value pairs
delete flavorCounter.vanilla;
delete flavorCounter.coffee;
delete flavorCounter.chocolate;



//For fun, I though I would add this block of code too.
// Creating a new list with changed froyo flavors based on the user input 
const updatedList = [];

for (let i = 0; i < flavors.length; i++) {
    if (flavors[i] === "vanilla") {
        updatedList.push("mango");                                  // replace 'vanilla' with 'mango'
    } else if (flavors[i] === "chocolate") {
        updatedList.push("peach");                                  // replace 'chocolate with 'peach'
    } else if (flavors[i] === "coffee") {
        updatedList.push("original");                               // replace 'coffee' with 'original'
    } else { 
        updatedList.push(flavors[i]);                               // Otherwise, just push the original flavor
    }
}

console.log("The flavor list may change based on your input.", updatedList);
